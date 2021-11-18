export const decoderHTMLEntilies = decoded_text =>{
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
    encoded: /&quot;/g,
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
  },
  {
    encoded: /&#039;/g,
    decoded: `'`
  },
  {
    encoded: `&rdquo;`,
    decoded: `"`
  },
  {
    encoded: `&eacute;`,
    decoded: `é`
  },
  {
    encoded: `&rsquo;s`,
    decoded: `'`
  }]

  for(let i=0; i<all_entities.length;++i){
    decoded_text = decoded_text.replace(all_entities[i].encoded,all_entities[i].decoded)
   
  }

  return decoded_text
}
