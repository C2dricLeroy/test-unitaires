module.exports = {
    position: function (letter) {
        const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        if (typeof(letter) === "string" && letter.length === 1) {
            let letterPosition;
            return letterPosition = alphabet.indexOf(letter) + 1
        } else {
            return 'error'
        }

    }
}