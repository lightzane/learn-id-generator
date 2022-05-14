import { ApiProperty } from "@nestjs/swagger";

export class Input {
    @ApiProperty()
    objectId: string;
}