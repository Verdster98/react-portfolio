function importAll(req) {
    let images = {};
    req.keys().forEach(item => { 
        images[item.replace('./', '')] = req(item) 
    });

    return images;
};