import * as jspb from 'google-protobuf'



export class Todo extends jspb.Message {
  getId(): string;
  setId(value: string): Todo;

  getTitle(): string;
  setTitle(value: string): Todo;

  getDescription(): string;
  setDescription(value: string): Todo;

  getCompleted(): boolean;
  setCompleted(value: boolean): Todo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Todo.AsObject;
  static toObject(includeInstance: boolean, msg: Todo): Todo.AsObject;
  static serializeBinaryToWriter(message: Todo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Todo;
  static deserializeBinaryFromReader(message: Todo, reader: jspb.BinaryReader): Todo;
}

export namespace Todo {
  export type AsObject = {
    id: string,
    title: string,
    description: string,
    completed: boolean,
  }
}

export class CreateTodoRequest extends jspb.Message {
  getActivity(): Todo | undefined;
  setActivity(value?: Todo): CreateTodoRequest;
  hasActivity(): boolean;
  clearActivity(): CreateTodoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTodoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTodoRequest): CreateTodoRequest.AsObject;
  static serializeBinaryToWriter(message: CreateTodoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTodoRequest;
  static deserializeBinaryFromReader(message: CreateTodoRequest, reader: jspb.BinaryReader): CreateTodoRequest;
}

export namespace CreateTodoRequest {
  export type AsObject = {
    activity?: Todo.AsObject,
  }
}

export class CreateTodoResponse extends jspb.Message {
  getActivity(): Todo | undefined;
  setActivity(value?: Todo): CreateTodoResponse;
  hasActivity(): boolean;
  clearActivity(): CreateTodoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTodoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTodoResponse): CreateTodoResponse.AsObject;
  static serializeBinaryToWriter(message: CreateTodoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTodoResponse;
  static deserializeBinaryFromReader(message: CreateTodoResponse, reader: jspb.BinaryReader): CreateTodoResponse;
}

export namespace CreateTodoResponse {
  export type AsObject = {
    activity?: Todo.AsObject,
  }
}

export class GetTodoRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetTodoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTodoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTodoRequest): GetTodoRequest.AsObject;
  static serializeBinaryToWriter(message: GetTodoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTodoRequest;
  static deserializeBinaryFromReader(message: GetTodoRequest, reader: jspb.BinaryReader): GetTodoRequest;
}

export namespace GetTodoRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetTodoResponse extends jspb.Message {
  getActivity(): Todo | undefined;
  setActivity(value?: Todo): GetTodoResponse;
  hasActivity(): boolean;
  clearActivity(): GetTodoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTodoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTodoResponse): GetTodoResponse.AsObject;
  static serializeBinaryToWriter(message: GetTodoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTodoResponse;
  static deserializeBinaryFromReader(message: GetTodoResponse, reader: jspb.BinaryReader): GetTodoResponse;
}

export namespace GetTodoResponse {
  export type AsObject = {
    activity?: Todo.AsObject,
  }
}

export class ListTodoRequest extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): ListTodoRequest;

  getNotCompleted(): boolean;
  setNotCompleted(value: boolean): ListTodoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTodoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTodoRequest): ListTodoRequest.AsObject;
  static serializeBinaryToWriter(message: ListTodoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTodoRequest;
  static deserializeBinaryFromReader(message: ListTodoRequest, reader: jspb.BinaryReader): ListTodoRequest;
}

export namespace ListTodoRequest {
  export type AsObject = {
    limit: number,
    notCompleted: boolean,
  }
}

export class ListTodoResponse extends jspb.Message {
  getActivitiesList(): Array<Todo>;
  setActivitiesList(value: Array<Todo>): ListTodoResponse;
  clearActivitiesList(): ListTodoResponse;
  addActivities(value?: Todo, index?: number): Todo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTodoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListTodoResponse): ListTodoResponse.AsObject;
  static serializeBinaryToWriter(message: ListTodoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTodoResponse;
  static deserializeBinaryFromReader(message: ListTodoResponse, reader: jspb.BinaryReader): ListTodoResponse;
}

export namespace ListTodoResponse {
  export type AsObject = {
    activitiesList: Array<Todo.AsObject>,
  }
}

export class DeleteTodoRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteTodoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTodoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTodoRequest): DeleteTodoRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteTodoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTodoRequest;
  static deserializeBinaryFromReader(message: DeleteTodoRequest, reader: jspb.BinaryReader): DeleteTodoRequest;
}

export namespace DeleteTodoRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteTodoResponse extends jspb.Message {
  getActivity(): Todo | undefined;
  setActivity(value?: Todo): DeleteTodoResponse;
  hasActivity(): boolean;
  clearActivity(): DeleteTodoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTodoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTodoResponse): DeleteTodoResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteTodoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTodoResponse;
  static deserializeBinaryFromReader(message: DeleteTodoResponse, reader: jspb.BinaryReader): DeleteTodoResponse;
}

export namespace DeleteTodoResponse {
  export type AsObject = {
    activity?: Todo.AsObject,
  }
}

export class UpdateTodoRequest extends jspb.Message {
  getActivity(): Todo | undefined;
  setActivity(value?: Todo): UpdateTodoRequest;
  hasActivity(): boolean;
  clearActivity(): UpdateTodoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTodoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTodoRequest): UpdateTodoRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateTodoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTodoRequest;
  static deserializeBinaryFromReader(message: UpdateTodoRequest, reader: jspb.BinaryReader): UpdateTodoRequest;
}

export namespace UpdateTodoRequest {
  export type AsObject = {
    activity?: Todo.AsObject,
  }
}

export class UpdateTodoResponse extends jspb.Message {
  getActivity(): Todo | undefined;
  setActivity(value?: Todo): UpdateTodoResponse;
  hasActivity(): boolean;
  clearActivity(): UpdateTodoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTodoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTodoResponse): UpdateTodoResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateTodoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTodoResponse;
  static deserializeBinaryFromReader(message: UpdateTodoResponse, reader: jspb.BinaryReader): UpdateTodoResponse;
}

export namespace UpdateTodoResponse {
  export type AsObject = {
    activity?: Todo.AsObject,
  }
}

