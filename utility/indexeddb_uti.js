
         
         //prefixes of implementation that we want to test
         window.indexedDB = window.indexedDB || window.mozIndexedDB || 
         window.webkitIndexedDB || window.msIndexedDB;
         
         //prefixes of window.IDB objects
         window.IDBTransaction = window.IDBTransaction || 
         window.webkitIDBTransaction || window.msIDBTransaction;
         window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || 
         window.msIDBKeyRange
         
         if (!window.indexedDB) {
            window.alert("Your browser doesn't support a stable version of IndexedDB.")
         }
         /*
            Takes two arrays and creates separate objectStores for Courses and Teachers
         */
         function create(courses,teachers){
            var db;
            var request = window.indexedDB.open("newDatabase", 1);
            request.onerror = function(event) {
               console.log("error: ");
            };
            
            request.onsuccess = function(event) {
               db = request.result;
               console.log("success connecting to db:"+ db);
               console.log(event.target);
               
            };
            
            request.onupgradeneeded = function(event) {
               var db = event.target.result;
               var objectStore = db.createObjectStore("courses",{keyPath: "name"});
               
               for (var i in courses) {
                  objectStore.add(courses[i]);
               }
               var objectStore = db.createObjectStore("teachers",{keyPath: "lastName"});
               
               for (var i in teachers) {
                  objectStore.add(teachers[i]);
               }
            }
         }

         /*
            Reads all data from storeObject
            Ex. read("courses") or read("teachers")
         */
         function read(store) {
            var result;
            var db;
            var request = window.indexedDB.open("newDatabase", 1);
            request.onerror = function(event) {
               console.log("error: ");
            };
            
            request.onsuccess = function (event) {
               db = event.target.result;
               console.log("success connecting to db:"+ db);
               var transaction = db.transaction([store]);
               var objectStore = transaction.objectStore(store);
               var request = objectStore.getAll();
               
               request.onerror = function (event) {
                  alert("Unable to retrieve data from database!");
               };
               
               request.onsuccess = function (event) {
                  if(request.result) {
                     //console.log(request.result);
                     result = request.result;
                     console.log(result);
                     
                  } else {
                     alert("Data couldn't be found in your database!");
                  }
                  
               };
               
            };
            return result; 
         }
         /*
            Adds an array of courses to the Courses objectStore
         */
         function addCourse(courses) {
            console.log();
            var db;
            var request = window.indexedDB.open("newDatabase", 1);
            request.onerror = function(event) {
               console.log("error: ");
            };
            
            request.onsuccess = function(event) {
               db = event.target.result;
               console.log("success connecting to db: "+ db);
               for(i = 0; i < courses.length; i++){
                  var request = db.transaction(["courses"], "readwrite")
                  .objectStore("courses")
                  .add({ "name": courses[i].name,
                     "courseCode": courses[i].courseCode,
                     "hours": courses[i].hours,
                     "period": courses[i].period,
                     "program": courses[i].program });
                  
                  request.onsuccess = function(event) {
                  console.log("Data has been added to your database.");
                  };
                  
                  request.onerror = function(event) {
                  console.log("Unable to add data\r\nData already exists in your database! ");
                  }
               }
            }
         }

         /* 
            Adds an array of teachers to the Teachers objectStore
         */
         function addTeacher(teachers) {
            console.log();
            var db;
            var request = window.indexedDB.open("newDatabase", 1);
            request.onerror = function(event) {
               console.log("error: ");
            };
            
            request.onsuccess = function(event) {
               db = event.target.result;
               console.log("success connecting to db: "+ db);
               for(i = 0; i < teachers.length; i++){
                  var request = db.transaction(["teachers"], "readwrite")
                  .objectStore("teachers")
                  .add({ 
                     "firstName": teachers[i].firstName,
                     "lastName": teachers[i].lastName
                      });
                  
                  request.onsuccess = function(event) {
                  console.log("Data has been added to your database.");
                  };
                  
                  request.onerror = function(event) {
                  console.log("Unable to add data\r\nData already exists in your database! ");
                  }
               }
            }
         }

         /* 
            Removes object from Courses objectStore. Specified by name.
            Ex. removeCourseData("Webbutveckling");
         */
         function removeCourseData(entry){

            const request = window.indexedDB.open("newDatabase", 1);
            
            request.onsuccess = () => {
               const db = request.result;
               const transaction = db.transaction(['courses'], 'readwrite');
               const invStore = transaction.objectStore('courses');
               const cursorRequest = invStore.openCursor();    
               cursorRequest.onsuccess = e => {
                   const cursor = e.target.result;
                   if (cursor) {
                     if(cursor.value.name === entry) {
                        var request = cursor.delete();

                        request.onsuccess = function() {
                          console.log('Record has been deleted.');
                        };

                        request.onerror = function(event) {
                           console.log("Unable to remove data!");
                        }
                      }
                       cursor.continue();
                   }
               }
           };
         }
         /* 
            Removes object from Teachers objectStore. Specified by lastName.
            Ex. removeTeacherData("Biström");
         */ 
         function removeTeacherData(entry){

            const request = window.indexedDB.open("newDatabase", 1);
            
            request.onsuccess = () => {
               const db = request.result;
               const transaction = db.transaction(['teachers'], 'readwrite');
               const invStore = transaction.objectStore('teachers');
               const cursorRequest = invStore.openCursor();    
               cursorRequest.onsuccess = e => {
                   const cursor = e.target.result;
                   if (cursor) {
                     if(cursor.value.lastName === entry) {
                        var request = cursor.delete();

                        request.onsuccess = function() {
                          console.log('Record has been deleted.');
                        };

                        request.onerror = function(event) {
                           console.log("Unable to remove data!");
                        }
                      }
                       cursor.continue();
                   }
               }
           };
         }
         /*
            Deletes database.
         */
         function delete_db(){
            var DBDeleteRequest = window.indexedDB.deleteDatabase("newDatabase");

            DBDeleteRequest.onerror = function(event) {
            console.log("Error deleting database.");
            };
               
            DBDeleteRequest.onsuccess = function(event) {
            console.log("Database deleted successfully");
                  
            console.log(event.result); // should be undefined
            };
         }
         
         
      