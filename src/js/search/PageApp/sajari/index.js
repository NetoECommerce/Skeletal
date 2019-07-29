// Sajari logic
import {
    Pipeline,
    Values,
    NoTracking
} from "@sajari/sdk-react";

const pipeline = new Pipeline(
    {
        project: "1562388238972153882",
        collection: "neto",
        endpoint: "https://jsonapi-au-staging.sajari.com"
    },
    "neto_query",
    new NoTracking()
);

const createValues = (config) => new Values(config)

export {
    pipeline,
    createValues
}