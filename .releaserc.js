module.exports = {
    branches: [
        'main',
        { name: 'beta', prerelease: true },
        { name: 'alpha', prerelease: true },
    ],
    plugins: [
        [
            'semantic-release-gitmoji',
            {
              releaseRules: {
                major: [':boom:'],
                minor: [':sparkles:'],
                patch: [
                  ':bug:',
                  ':ambulance:',
                  ':lipstick:',
                  ':lock:',
                  ':zap:',
                  ':apple:',
                  ':penguin:',
                  ':checkered_flag:',
                  ':robot:',
                  ':green_apple:',
                  ':chart_with_upwards_trend:',
                  ':globe_with_meridians:',
                  ':alien:',
                  ':wheelchair:',
                  ':loud_sound:',
                  ':mute:',
                  ':mag:',
                  ':children_crossing:',
                  ':speech_balloon:',
                  ':iphone:',
                  ':pencil2:',
                  ':bento:',
                  ':heavy_plus_sign:',
                  ':heavy_minus_sign:',
                ],
              },
            },
          ],
        '@semantic-release/github',

    [
        '@semantic-release/git',
        {
          assets: ['package.json'],
          message:
            ':bookmark: ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
        },
      ],
    ]
}