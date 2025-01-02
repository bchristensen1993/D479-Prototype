(function(window, undefined) {
  var dictionary = {
    "3e8cd25c-8de1-4e17-83f6-80ebed73066f": "Entertainment Page",
    "bb181922-ba3f-4602-8198-74b7667a0a45": "Lodging Page",
    "915b781e-8d0b-4916-be3b-a9278fe7ad8a": "FAQs Page",
    "be67c7eb-c011-40a5-ba1b-cfc71f8796db": "Dining Page",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Home Page",
    "ae3eb61b-43d4-4b20-9478-d0b362ba3466": "Transportation Page",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "Board 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);