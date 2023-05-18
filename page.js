//'https://cdn2-www.comingsoon.net/assets/uploads/2018/08/conair-618x360.jpg'
const delay = ms => new Promise(res => setTimeout(res, ms));



const get_elements = async () => {
  await delay(2000);
  const blocker = document.querySelector(".modal_modal-window-container__26ycp.modal_white-background__Y82PV.modal_show__b7uvj");
  console.log('Searching');
  if(blocker){
  	blocker.remove();
  }else{
  	const blocker = document.querySelector(".modal_modal-window-container__26ycp.modal_black-background__NLxQR.modal_show__b7uvj");
  	console.log('Searching');
  	blocker.remove();
  }

};



get_elements()



// Log statement to test that the extension loaded properly.
