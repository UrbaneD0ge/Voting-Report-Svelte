export const ssr = false;

// export const actions = {
//   default: async ({ request }) => {
//     // console.log('default action');

//     // get the submitted agenda item
//     const data = await request.formData();

//     // assemble the data into a JSON object
//     const formItem = {
//       type: data.get('itmType'),
//       applName: data.get('applName'),
//       rec: data.get('disposal'),
//       comments: data.get('conditions') || ''
//     }

//     console.log(formItem);

//     return { success: 'Added', formItem: formItem };
//   }
// };