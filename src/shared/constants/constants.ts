import { ApiBodyOptions, ApiOperationOptions } from "@nestjs/swagger";
import { getMockInput } from "../../mocks/mock-input";

export const API_TAGS = {
    Generators: 'generators',
    Utilities: 'utilities'
};

export const API_OPERATION = {
    get Uuid(): Partial<ApiOperationOptions> {
        return {
            summary: 'returns uuid',
            description: 'Generates a universal unique identifer (v4) and returns it as a string'
        };
    },

    get ObjectId(): Partial<ApiOperationOptions> {
        return {
            summary: 'returns ObjectId or MongoId',
            description: 'Generates a BSON ObjectID or MongoID and returns it as a string'
        };
    },

    get ObjectIdTimestamp(): Partial<ApiOperationOptions> {
        return {
            description: 'Retrieves the timestamp when the ObjectID was generated'
        };
    }
};

export const API_BODY = {
    get ObjectIdTimestamp(): Partial<ApiBodyOptions> {
        return {
            schema: {
                example: getMockInput()
            }
        };
    }
};