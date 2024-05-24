import { FastifyInstance, RouteShorthandOptions } from "fastify";


export const iesRoutes = (fastify: FastifyInstance,
    options: RouteShorthandOptions, done: () => void
) => {
    fastify.register()
    done();
}