export const uuidGenerator = () => {
    const min = 1000000000;
    const max = 9999999999;
    const uuid = Math.floor(Math.random() * (max - min + 1)) + min;
    return uuid
}

export const slugfy = ( uuid, title, tags) => {
    
    title = title.toLowerCase();
    title = title.replace(/[^a-z0-9\s]/g, '');
    title = title.replace(/\s+/g, '-');
    
    let slug = `${uuid}-${title}`;
    
    if (tags && tags.length > 0) {
        let tagString = tags.join('-');
        slug += `-${tagString}`;
    }

    return slug;
}