import PocketBase from 'pocketbase';

// let pb = new PocketBase('http://127.0.0.1:8090')

// pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

// export const load = () => {
//   return {
//     pb
//   }
// }

// export const handle = async ({ event, resolve }) => {
// 	event.locals.pb = new PocketBase('http://localhost:8090');
// 	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

// 	if (event.locals.pb.authStore.isValid) {
// 		event.locals.user = serializeNonPOJOs(event.locals.pb.authStore.model);
// 	} else {
// 		event.locals.user = undefined;
// 	}

// 	const response = await resolve(event);

//   // TODO: secure before deployment
// 	response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({ secure: false }));

// 	return response;
// };






export const load = async (event) => {

  const fetchPocketBase = async () => {
      const pb = new PocketBase('http://127.0.0.1:8090');
      pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');
      return structuredClone(pb)
    }
    return {
       pb: fetchPocketBase(),
    }
}
