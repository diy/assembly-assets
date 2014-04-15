var test = require('tap').test;
var a = require('./');

var fixture = function Fixture () {};

fixture.prototype = Array.prototype;

fixture.web_220 = {
  "id": "foo",
  "name": "test.jpg",
  "basename": "test",
  "ext": "jpg",
  "size": 20953,
  "mime": "image/jpeg",
  "type": "image",
  "field": "media",
  "md5hash": "xxxxx",
  "original_id": "xxxxx",
  "original_basename": "test",
  "original_md5hash": "xxxxx",
  "url": "http://test.jpg",
  "meta": {
    "width": 220,
    "height": 160,
    "date_recorded": null,
    "date_file_created": null,
    "date_file_modified": "2014/04/15 22:14:31 GMT",
    "title": null,
    "description": null,
    "location": null,
    "aspect_ratio": 1.375,
    "city": null,
    "state": null,
    "country": null,
    "country_code": null,
    "keywords": null,
    "aperture": null,
    "exposure_compensation": null,
    "exposure_mode": null,
    "exposure_time": null,
    "flash": null,
    "focal_length": null,
    "f_number": null,
    "iso": null,
    "light_value": null,
    "metering_mode": null,
    "shutter_speed": null,
    "white_balance": null,
    "device_name": null,
    "device_vendor": null,
    "device_software": null,
    "latitude": null,
    "longitude": null,
    "orientation": null,
    "has_clipping_path": false,
    "creator": null,
    "author": null,
    "copyright": null,
    "copyright_notice": null,
    "frame_count": 1
  },
  "ssl_url": "https://test.jpg"
};

test('assembly assets', function (t) {
    t.equal(
        'foo',
        a(fixture).web_220.id,
        'mapped id'
    );
    t.end();
});
