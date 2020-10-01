'use strict'



const Core = {}


function slugify(text) {
    var slug = text.toLowerCase();
    if (slug.match(/\/(.*)/)) {
        slug = slug.replace(/\/(.*)/, "/post");
    }
    return slug;
}

Core.topicEdit = (data, callback) => {
    if (data && data.topic && data.topic.slug) {
        data.topic.slug = slugify(data.topic.slug);
    }

    callback(null, data);
};

Core.topicCreate = (data, callback) => {
    if (data && data.topic && data.topic.slug) {
        data.topic.slug = slugify(data.topic.slug);
    }

    callback(null, data);
};

module.exports = Core
module.exports.Core = Core