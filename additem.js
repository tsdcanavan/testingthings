function addItem(id) {
    // add an item to the user's account and get the item's key
    database.ref(id).push({
        itemName: "chair",
        itemDesc: "sitdown",
        itemQty: 2,
        itemPrice: 85.00,
        itemTags: "tagger1, tagger2, tagger3",
        itemImg: "url infor"
    });
    database.ref(id).on('child_added', function (snapshot) {
        itemId = snapshot.key;
        console.log(itemId);
    });

}
