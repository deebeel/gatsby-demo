import {Content} from './content';
import {ArtistName} from './artistName';
import {Nav} from './navigation';

export function Layout({children}: GenericProps<{ }>) {
    return <div
        className="relative grid mt-2 mx-2 grid-cols-[1fr] gap-1
        md:mx-24 md:grid-cols-[220px_minmax(700px,_1fr)] md:gap-2">
        <div className="flex flex-col m-1 gap-4">
            <ArtistName/>
            <Nav/>
        </div>
        <Content className="mt-1 md:px-28">
            {children}
        </Content>
    </div>
}