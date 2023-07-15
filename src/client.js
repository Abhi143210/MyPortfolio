import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client=createClient({
    projectId: '2di8nnai',
    dataset:'production',
    apiVersion: '2023-07-10',
    useCdn:true,
    token: 'skslLwUOzCNoyc2xiPcsJDKE8zzwJGHt0iFEjzXURB1lUGBYHrQNNoHn6k6u06K2ztuaTHqdXI4ShozgemioM8TP5nZbGBg6xuMHu01niqJTBvmZaxdBgSYcsFSwxtPyJ26xiTCifX7eO9wyKLjiE8a8zUmao7fqUsMYkNWNNNrX25n0yigX',
});

const builder=imageUrlBuilder(client);

export const urlFor=(source)=>builder.image(source)