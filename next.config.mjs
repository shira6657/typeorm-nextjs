/** @type {import('next').NextConfig} */
// import webpack from "webpack";
// import FilterWarningsPlugin from "webpack-filter-warnings-plugin";

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**"
            }
        ]
    },

    // webpack: (config, { isServer }) => {



    //     config.plugins.push(
    //         new webpack.IgnorePlugin({
    //             resourceRegExp: /@sap\/hana-client\/extension\/Stream/,
    //             contextRegExp: /typeorm/,
    //         }),
    //         new webpack.IgnorePlugin({
    //             resourceRegExp: /typeorm\/connection\/ConnectionOptionsReader\.js/,
    //             contextRegExp: /typeorm/,
    //         })
    //     );
    //     config.plugins.push(
    //         new FilterWarningsPlugin({
    //             exclude: [
    //                 /mongodb/,
    //                 /mysql/,
    //                 /mysql2/,
    //                 /oracledb/,
    //                 /pg/,
    //                 /pg-native/,
    //                 /pg-query-stream/,
    //                 /react-native-sqlite-storage/,
    //                 /redis/,
    //                 /sqlite3/,
    //                 /sql.js/,
    //                 /typeorm-aurora-data-api-driver/,
    //                 /Critical dependency: the request of a dependency is an expression/,
    //                 /Module not found: Can't resolve '(@sap\/hana-client\/extension\/Stream'|typeorm\/platform\/PlatformTools\.js)/,
    //             ],
    //         })
    //     );

    //     return config;
    // },
};

export default nextConfig;
