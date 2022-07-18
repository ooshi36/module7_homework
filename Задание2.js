function checkProperty(propertyName, obj) {

    if (obj.hasOwnProperty(propertyName)===true)
    {
        return true;
    }
    else {
        return false;
    }
}