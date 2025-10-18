import { Request } from 'express'

export type TypedRequest<
    Params = Record<string, string>,
    Body = any,
    Query = Record<string, string>,
> = Request<Params, any, Body, Query>

export type TypedRequestParams<T> = TypedRequest<T>
export type TypedRequestQuery<T> = TypedRequest<{}, {}, T>
export type TypedRequestBody<T> = TypedRequest<{}, T>
