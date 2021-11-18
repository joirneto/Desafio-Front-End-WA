export const calcWidthCss =(num) =>{
  let widthNew;

  const width = [
    {
      percent:8,
      width: '1/12'
    },
    {
      percent:16,
      width: '1/6'
    },
    {
      percent:20,
      width: '1/5'
    },
    {
      percent:25,
      width: '1/4'
    },
    {
      percent:33,
      width: '1/3'
    },
    {
      percent:40,
      width: '2/5'
    },
    {
      percent:50,
      width: '2/4'
    },
    {
      percent:60,
      width: '3/5'
    },
    {
      percent:66,
      width: '2/3'
    },
    {
      percent:75,
      width: '3/4'
    },
    {
      percent:80,
      width: '4/5'
    },
    {
      percent:90,
      width: '11/12'
    },
    {
      percent:100,
      width: 'full'
    }
  ]

  for(let i=0;i<width.length;++i){
    if(num<width[i].percent){
      widthNew = width[i].width
      break;
    }
  }
  return widthNew
}



