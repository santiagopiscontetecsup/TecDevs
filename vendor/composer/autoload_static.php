<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitab795ffea28b18d85df633bdc43a1e69
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitab795ffea28b18d85df633bdc43a1e69::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitab795ffea28b18d85df633bdc43a1e69::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitab795ffea28b18d85df633bdc43a1e69::$classMap;

        }, null, ClassLoader::class);
    }
}
