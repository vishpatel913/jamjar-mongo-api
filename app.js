require("./server");

var User = require('./api/models/userModel');
var Space = require('./api/models/spaceModel');
var Device = require('./api/models/deviceModel');

var dev1 = new Device({
  _id: 12345,
  major_id: 98765,
  name: "Poolside Beanbag",
  description: "Beanbags to the right of the pool"
});

var dev2 = new Device({
  _id: 12346,
  major_id: 98765,
  name: "Round Table",
  description: "Round table just in front of the pool"
});

var space1 = new Space({
  major_id: 98765,
  name: "Dojo Bali",
  coords: {
    lat: "-8.6534412",
    long: "115.12663700000007"
  },
  device_list: [dev1._id, dev2._id]
})

var user1 = new User({
  name: "Vish Patel",
  role: "Front-end Developer",
  bio: "Experience with JavaScript frameworks such as MEAN stack and React, as well as graphic design",
  // image: '',
  status: "active",
  space_list: [space1._id],
  current_space: space1._id,
  current_device: dev1._id
});

var user2 = new User({
  name: "Vic Spencer",
  role: "Marketing",
  bio: `Recent Newcastle graduate, looking for work`,
  space_list: [space1._id]
});

dev1.save();
dev2.save();
space1.save();
user1.save();
user2.save();
