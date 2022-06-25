import {graphql, PageProps} from 'gatsby';
import {GatsbyImage} from 'gatsby-plugin-image';
import {Layout} from 'components/layout';

export default function About({data}: PageProps<{ artist: ArtistModel }>) {
    const {artist} = data;
    return <Layout>
        <div>
            <GatsbyImage image={artist.photo.thumb} alt={`${artist.name} ${artist.surname}`}/>
        </div>
        <div className="flex flex-col">
            {artist.cv.map(cv => (
                <a title={cv.title} key={cv.id} href={cv.url} download target="_blank">{cv.title}</a>))}
        </div>
    </Layout>
}

export const pageQuery = graphql`
        query ArtistPageQuery {
            artist: contentfulArtist {
                id
                name
                surname
                birthDay
                photo {
                    id
                    title
                    url
                    mimeType,
                    thumb: gatsbyImage(height: 200)
                }
                cv {
                    id
                    title
                    url
                }
            }
        }`

interface ArtistModel {
    id: string;
    name: string;
    surname: string;
    email: string;
    birthDay: string;
    photo: Demo.Image;
    cv: Demo.File[];
}
