angular.module('starter.services', [])

.factory('Pantauans', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var pantauans = [{
    id: 0,
    rate: 9,
    name: 'Suminah',
    lastText: 'Rp 12.500 /kg',
    lokasi: 'Yogyakarta, Cebongan',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 13,
    rate: 7,
    name: 'Ibu Maryam',
    lastText: 'Rp 11.000 /kg',
    lokasi: 'Yogyakarta, Jumeneng',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 7,
    rate: 0,
    name: 'Pasar Bringharjo',
    lastText: 'Rp 10.000 /kg',
    lokasi: 'Yogyakarta',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 2,
    rate: 0,
    name: 'Ibu Susi',
    lastText: 'Rp 10.000 /kg',
    lokasi: 'Yogyakarta, Brebah',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 2,
    rate: 0,
    name: 'Hartuti',    
    lastText: 'Rp 10.500 /kg',
    lokasi: 'Yogyakarta',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];

  return {
    all: function() {
      return pantauans;
    },
    remove: function(pantauan) {
      pantauans.splice(pantauans.indexOf(pantauan), 1);
    },
    get: function(pantauanId) {
      for (var i = 0; i < pantauans.length; i++) {
        if (pantauans[i].id === parseInt(pantauanId)) {
          return pantauans[i];
        }
      }
      return null;
    }
  };
});