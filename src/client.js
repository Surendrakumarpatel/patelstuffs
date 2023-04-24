import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url"

export const client =  sanityClient({
    projectId:'5ss3bxdf',
    dataset:'production',
    apiVersion:'2022-02-01',
    useCdn:true,
    token:process.env.REACT__APP__TOKEN
})

const builder  = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);