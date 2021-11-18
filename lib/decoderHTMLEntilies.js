

function htmlEntityReplacer(encoded_text){ 

    var decoded_text = encoded_text;

    const all_entities = [{ 
      encoded: `&nbsp;`,
      decoded: ` `
    }, {
      encoded: `&lt;`,
      decoded: `<`
    }, {
      encoded: `&gt;`,
      decoded: `>`
    }, {
      encoded: `&amp;`,
      decoded: `&`
    }, {
      encoded: `&quot;`,
      decoded: `"`
    }, {
      encoded: `&apos;`,
      decoded: `'`
    }, {
      encoded: `&cent;`,
      decoded: `¢`
    }, {
      encoded: `&pound;`,
      decoded: `£`
    }, {
      encoded: `&yen;`,
      decoded: `yen`
    }, {
      encoded: `&euro;`,
      decoded: `€`
    }, {
      encoded: `&copy;`,
      decoded: `©`
    }, {
      encoded: `&reg;`,
      decoded: `®`
    },
    {
      encoded: `&deg;`,
      decoded: `°`
    }]
  for (i = 0; i < all_entities.length; i++) {
    var decoded_text = decoded_text.replace(new RegExp(all_entities[i].encoded, 'g'), all_entities[i].decoded)
  }

  console.log('nos=', decoded_text)

  return decoded_text;

}

module.exports = {
  htmlEntityReplacer
}

