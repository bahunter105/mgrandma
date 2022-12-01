import PocketBase from 'pocketbase';

let pb = new PocketBase('http://127.0.0.1:8090')

export const load = () => {
  return {
    pb
  }
}

// export const load = async (event) => {

//   const fetchPocketBase = async () => {
//       const pb = new PocketBase('http://127.0.0.1:8090');
//         return pb
//     }
//     console.log(event)
//     return {
//        pb: fetchPocketBase(),
//     }
// }
