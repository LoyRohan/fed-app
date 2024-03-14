import * as React from 'react';
const Header = React.lazy(() => import('subApp/SubAppComponent'));

const Module = () => (
    <div>
        <React.Suspense fallback="Loading...">
            <div>
                <Header />
            </div>
        </React.Suspense>
    </div>
);

export default Module;