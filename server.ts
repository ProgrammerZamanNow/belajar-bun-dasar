Bun.serve({
    port: 3000,
    fetch: (request, server) => {
        const url = new URL(request.url);
        if (url.searchParams.get('name')) {
            const name = url.searchParams.get('name');
            return new Response(`Hello ${name}!`);
        } else {
            return new Response(`Hello World!`);
        }
    }
});
