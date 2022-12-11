import { error, redirect } from '@sveltejs/kit';
import PocketBase from 'pocketbase';

let pb = new PocketBase('http://127.0.0.1:8090')

export const actions = {
	register: async ({ locals, request }) => {
		const body = Object.fromEntries(await request.formData());

		try {
			await pb.users.create({ ...body });
      // TODO: fix email verification
			// await pb.users.requestVerification(body.email);
		} catch (err) {
			console.log('Error: ', err);
			throw error(500, 'Something went wrong');
		}

		throw redirect(303, '/login');
	}
};
