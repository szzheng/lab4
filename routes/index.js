
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index', {
    'projects': [
      { 'name': 'Chore Manager',
        'image': 'lorempixel.people.1.jpeg',
        'id': 'project1'
      },
      { 'name': 'Avalon (The Resistance) Google Hangout Extension',
        'image': 'lorempixel.city.1.jpeg',
        'id': 'project2'
      },
      { 'name': 'Family Locator App',
        'image': 'lorempixel.technics.1.jpeg',
        'id': 'project3'
      },
    ]
  });
};
