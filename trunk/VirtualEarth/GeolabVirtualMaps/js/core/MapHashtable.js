/* Author: JBaltikauskas */
Type.registerNamespace("Geolab");
Geolab.HashTable = function(){
    // Initialize the base.
    Geolab.HashTable.initializeBase(this);
    this.hashtable = new Array();
};
Geolab.HashTable.prototype = { 
    clear : function() {
       this.hashtable = null;
       this.hashtable = new Array();
    },
    containsKey : function(key) {
       var exists = false;
       for (var i in this.hashtable) {
          if (i == key && this.hashtable[i] != null) {
             exists = true;
             break;
             }
          }
       return exists;
    },
    containsValue : function(value) {
       var contains = false;
       if (value != null) {
          for (var i in this.hashtable) {
             if (this.hashtable[i] == value) {
                contains = true;
                break;
                }
             }
          }
       return contains;
    },
    get : function(key) {
       return this.hashtable[key];
    },
    isEmpty : function() {
       return (parseInt(this.size()) == 0) ? true : false;
    },
    keys : function() {
       var keys = new Array();
       for (var i in this.hashtable) {
          if (this.hashtable[i] != null) keys.push(i);
          }
       return keys;
    },
    put : function(key, value) {
        if (key == null || value == null) {
            throw "NullPointerException {" + key + "},{" + value + "}";
        }
        else {
            this.hashtable[key] = value;
        }
    },
    remove : function(key) {
       var rtn = this.hashtable[key];
       this.hashtable[key] = null;
       return rtn;
    },
    size : function() {
       var size = 0;
       for (var i in this.hashtable) {
          if (this.hashtable[i] != null) size ++;
          }
       return size;
    },
    toString : function() {
       var result = "";
       for (var i in this.hashtable) {
          if (this.hashtable[i] != null) result += "{" + i + "},{" + this.hashtable[i] + "}\n";
          }
       return result;
    },
    values : function() {
       var values = new Array();
       for (var i in this.hashtable) {
          if (this.hashtable[i] != null) values.push(this.hashtable[i]);
          }
       return values;
    },
    entrySet : function() {
       return this.hashtable;
    },
    dispose : function(){
        this.hashtable = null;
    }
};

