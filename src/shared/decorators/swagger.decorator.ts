import { applyDecorators } from "@nestjs/common";
import { ApiBody, ApiOperation, ApiTags } from "@nestjs/swagger";
import { API_BODY, API_OPERATION, API_TAGS } from "../constants/constants";

export const SwaggerUuid = () => (
    applyDecorators(
        ApiTags(API_TAGS.Generators),
        ApiOperation(API_OPERATION.Uuid)
    )
);

export const SwaggerObjectId = () => (
    applyDecorators(
        ApiTags(API_TAGS.Generators),
        ApiOperation(API_OPERATION.ObjectId)
    )
);

export const SwaggerObjectIdTimestamp = () => (
    applyDecorators(
        ApiTags(API_TAGS.Utilities),
        ApiOperation(API_OPERATION.ObjectIdTimestamp),
        ApiBody(API_BODY.ObjectIdTimestamp)
    )
);