function chickenWith(sidedish) {
    sidedish = sidedish || "whatever";
    //can also be done like this
    // if (sidedish === undefined) {
    //     sidedish = "whatever";
    // }
    console.log("Chicken with " + sidedish);
}

chickenWith("Noodles");
chickenWith();
