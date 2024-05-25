import { FastifyInstance, RouteShorthandOptions } from "fastify";


export const produtosRoutes = (fastify: FastifyInstance,
    options: RouteShorthandOptions, done: () => void
) => {
    fastify.register()
    done();
}
