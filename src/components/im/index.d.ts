interface messagei {
    type: string;
    author: string;
    id?: number;
    isEdited?: boolean;
    data: {
        text: string;
        meta: string;
    };
}