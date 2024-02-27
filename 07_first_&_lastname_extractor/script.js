let fullname = "Walter white"

//finding index of space character
let spaceIndex = fullname.indexOf(" ")

//slicing first name
let firstName = fullname.slice(0, spaceIndex)

//slicing last name
let lastName = fullname.slice(spaceIndex + 1)


console.log("Your firstName is", firstName, "and lastName is", lastName);
