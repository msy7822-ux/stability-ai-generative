import { Ai } from '@cloudflare/ai';

export interface Env {
	API_KEY: string;
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext) {
		const ai = new Ai(env.AI);
		const response = await ai.run('@cf/stabilityai/stable-diffusion-xl-base-1.0', {
			prompt: 'A running human',
		});
		return new Response(response, {
			headers: {
				'content-type': 'image/png',
			},
		});
	},
};

// // import { generateAsync } from 'stability-client';
// // const generateAsync = require('stability-client').generateAsync
// import { generate } from 'stability-client';

// export interface Env {
// 	API_KEY: string;
// 	// Example binding to KV. Learn more at https://developers.cloudflare.com/workers/runtime-apis/kv/
// 	// MY_KV_NAMESPACE: KVNamespace;
// 	//
// 	// Example binding to Durable Object. Learn more at https://developers.cloudflare.com/workers/runtime-apis/durable-objects/
// 	// MY_DURABLE_OBJECT: DurableObjectNamespace;
// 	//
// 	// Example binding to R2. Learn more at https://developers.cloudflare.com/workers/runtime-apis/r2/
// 	// MY_BUCKET: R2Bucket;
// 	//
// 	// Example binding to a Service. Learn more at https://developers.cloudflare.com/workers/runtime-apis/service-bindings/
// 	// MY_SERVICE: Fetcher;
// 	//
// 	// Example binding to a Queue. Learn more at https://developers.cloudflare.com/queues/javascript-apis/
// 	// MY_QUEUE: Queue;
// }

// export default {
// 	async fetch(request: Request, env: Env, ctx: ExecutionContext) {
// 		try {
// 			const api = generate({
// 				prompt: 'A Stunning House',
// 				apiKey: env.API_KEY,
// 			});
// 			// const { res, images } = await generateAsync({
// 			// 	prompt: '整形前に見る、整形後の自分の顔のプレビュー',
// 			// 	apiKey: env.API_KEY,
// 			// });

// 			api.on('image', ({ buffer, filePath }) => {
// 				console.log('Image', buffer, filePath);
// 			});

// 			api.on('end', (data) => {
// 				console.log('Generating Complete', data);
// 			});
// 		} catch (e) {}

// 		console.log('hello world', env.API_KEY);
// 		return new Response(JSON.stringify({ hello: 'world2' }), {
// 			headers: {
// 				'content-type': 'application/json;charset=UTF-8',
// 				'Access-Control-Allow-Origin': 'https://busy-qbhouse.pages.dev',
// 			},
// 		});
// 	},
// };
