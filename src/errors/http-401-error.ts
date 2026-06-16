import { ApiProperty } from '@nestjs/swagger';

export class Http401Error {
  @ApiProperty({
    example: 401,
    type: 'integer',
    description: 'The status code.',
  })
  statusCode!: number

  @ApiProperty({
    example: 'The request could not be authenticated.',
    type: 'string',
    description: 'The error message.',
  })
  message!: string

  @ApiProperty({
    example: 'Unauthorized',
    type: 'string',
    description: 'The error description.',
  })
  error!: string
}
