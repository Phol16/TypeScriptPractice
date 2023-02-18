"use strict";
exports.__esModule = true;
var score = 33; //combining type with | (pipe sign)
score = 'hello';
score = 45;
score = false;
var phol = { name: 'phol', id: 324 };
phol = { username: 'Pusername', id: 2134 }; //admin type
//union narrowing by doing a conditional statement
function getDbId(id) {
    if (typeof id === 'string') {
        id.toLowerCase();
    }
}
