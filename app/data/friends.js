var friends = [
    {
        "name":"Ahmed",
        "photo":"https://images.freeimages.com/images/large-previews/b0b/american-flag-1547938.jpg",
        "scores":[
            "5",
            "1",
            "4",
            "4",
            "5",
            "1",
            "2",
            "5",
            "4",
            "1"
          ]
      },

      {
          "name": "Lance",
          "photo": "//blah",
          "scores": [
              "4",
              "3",
              "3",
              "3",
              "4",
              "4",
              "1",
              "1",
              "3",
              "2",
          ]
      },
      {
        "name": "John Smith",
        "photo": "//blah",
        "scores": [
            "3",
            "3",
            "3",
            "4",
            "5",
            "5",
            "2",
            "1",
            "3",
            "4",
        ]
    }
];


function compareScores() {
    for(let i = 0; i <friends.length; i++) {
        console.log(friends);
    }
}

module.exports = friends;