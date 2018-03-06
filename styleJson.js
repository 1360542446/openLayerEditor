let styleJSON = {
    'version': 0.1,
    'owner': 'ThinkGeo',
    'time': '2018-01-04 16:05:00',
    'variables': {
        '@path': 'Server=13.57.8.209;Port=5432;User Id=openmaptiles;Password=openmaptiles;DataBase=openmaptiles;',
        '@baseland_polygon_fill': '#f5f3f0',
        '@baseland_text_fill,@baseland_text_fill_lighter': 'rgb(102,102,102)',
        '@landfill': 'rgb(0,0,0)',
        '@baseland_text_halo_fill': 'rgba(255,255,255,0.9)',
        '@water_text_fill': 'rgb(0,102,204)',
        '@water_text_halo_fill': 'rgba(255,255,255,0.5)',
        '@text_name': 'name',
        '@text_align': 'center',
        '@polygon_text': '#408080',
        '@text_placements': 'U,B,R',
        '@countryLineColor': 'argb(1,190,175,190)',
        '@lineWidth': 1,
        '@water': '#a0cfeb',
        '@landbackgroundfill': 'rgb(183,182,147)',
        '@park': '#d3e2be',
        '@wood': 'rgb(206,215,193)',
        '@golf_courseborder': 'rgb(183,227,225)',
        '@golf_course': 'rgb(182,227,182)',
        '@protected_areaborder,@protected_area': 'rgba(203,223,171,0.5)',
        '@aerodrome': 'rgb(233,230,225)',
        '@national_park': '#cff0b0',
        '@reservoir': 'rgb(160,207,235)',
        '@orchard,@vineyards': 'rgb(204,153,0)',
        '@orchardbackground': 'rgb(159,216,144)',
        '@vineyardsbackground': 'rgb(180,225,169)',
        '@railway': 'rgb(230,230,230)',
        '@cemetery': 'rgb(219,223,213)',
        '@quarry': 'rgb(225,217,211)',
        '@marina,@water_park': 'rgba(255,255,255,1)',
        '@basin': 'rgb(173,216,230)',
        '@basinbackground': '#faf7f3',
        '@wetland': 'rgba(255,255,255,1)',
        '@village_green,@meadow,@common,@garden': 'rgb(208,236,169)',
        '@recreation_ground': 'rgb(207,236,169)',
        '@farmyard,@farm,@farmland': 'rgb(245,230,211)',
        '@industrial': 'rgb(233,232,223)',
        '@retail': 'rgb(243,235,245)',
        '@commercial': 'rgb(235,235,245)',
        '@oneway_file': 'Icons\\\\highwayoneway.16.png',
        '@forest': 'rgb(197,217,185)',
        '@military': 'rgba(225,225,225,0.5)',
        '@militarybackground': 'rgba(200,200,200,0.5)',
        '@grass': 'rgb(207,235,169)',
        '@residential': 'rgb(245,235,235)',
        '@beach': 'rgb(254,249,229)',
        '@grassland': 'rgb(214,225,198)',
        '@heath': 'rgb(213,215,182)',
        '@mud': 'rgb(125,95,63)',
        '@mudbackground': 'rgb(230,223,216)',
        '@sand': 'rgb(250,246,230)',
        '@wetlandbackground': 'rgba(204,255,255,0.3)',
        '@scrubborder': 'rgb(209,215,195)',
        '@scrub': 'rgb(209,225,167)',
        '@water_parkborder,@marinaborder': 'rgb(168,184,245)',
        '@trackborder': 'rgb(166,225,203)',
        '@track': 'rgb(120,220,188)',
        '@pitchborder': 'rgb(148,212,177)',
        '@pitch': 'rgb(205,219,186)',
        '@stadiumborder': 'rgb(55,206,155)',
        '@stadium': 'rgb(158,225,200)',
        '@sports_centre': 'rgb(188,228,206)',
        '@playgroundborder': 'rgb(152,216,179)',
        '@playground': 'rgb(206,246,202)',
        '@dog_park': 'rgb(208,236,170)',
        '@nature_reserve': 'rgb(229,232,221)',
        '@attractionborder': 'rgb(225,202,219)',
        '@attraction': 'rgb(244,220,237)',
        '@zoo': 'rgb(205,246,202)',
        '@helipad': 'rgb(187,187,205)',
        '@university,@college,@kindergarten,@school': 'rgb(240,240,216)',
        '@parking': 'rgb(240,238,233)',
        '@swimming_poolborder': 'rgb(153,204,255)',
        '@swimming_pool': 'rgb(224,255,255)',
        '@apronborder': 'rgb(165,165,180)',
        '@apron': 'rgb(197,197,215)',
        '@runway': '#C2C1CF',
        '@building_fill': '#eef3f5',
        '@building_border': '#d1d9dc',
        '@squareborder,@building_fillborder': 'rgb(204,204,204)',
        '@squareborderwidth': 3,
        '@radius': 1,
        '@line_cap,@countryLineCap': 'round',
        '@shield_fill': '#333',
        '@shield_name': 'ref',
        '@array1': '3,20',
        '@array2': '1,2',
        '@rail_inner,@tram_inner,@narrow_gauge_inner,@light_rail_inner,@miniature_inner': '#FAF7F3',
        '@subway_center': '#e0e0e0',
        '@monorail_inner': '#FAFAFA',
        '@taxiway_outer': '#c1c1d2',
        '@runway_outer': '#BCBCCD',
        '@cable_car_outer': '#C1C1D2',
        '@pier_outer,@pier': '#FAF8F6',
        '@motorway6_9': '#f8d288',
        '@motorway_outer': '#f8d288',
        '@motorway_inner': '#f7c380',
        '@motorway_link_outer': '#E1B678',
        '@motorway_link_inner': '#F7DDB9',
        '@trunk_outer': '#E1CDA8',
        '@trunk_inner,@trunk8_9': '#F5E7CA',
        '@trunk_link_outer': '#E2D0AC',
        '@trunk_link_inner': '#FAF2E1',
        '@primary_link_inner,@primary_inner': '#faf6e1',
        '@unclassified_outer,@residential_outer,@tertiary_outer,@secondary_outer,@monorail_outer,@subway_inner': '#E1E1E1',
        '@living_street_outer,@road_outer,@primary_link_outer,@primary_outer,@tertiary_link_outer,@secondary_link_outer,@motorway_link_center,@motorway_center,@monorail_center,@miniature_center,@miniature_outer,@light_rail_center,@light_rail_outer,@narrow_gauge_center,@narrow_gauge_outer,@subway_outer,@tram_center,@tram_outer,@rail_center,@rail_outer': '#CCCCCC',
        '@service_outer': '#e2e2e1',
        '@service_inner,@pedestrian_inner,@living_street_inner,@road_inner,@unclassified_inner,@residential_inner,@tertiary_link_inner,@tertiary_inner,@secondary_link_inner,@secondary_inner': '#FFFFFF',
        '@tunnel_inner1': 'rgba(204,204,204,1)',
        '@bridge_outer1,@tunnel_outer1,@square': 'rgb(153,153,153)',
        '@bridge_outer2': '#9b9a98',
        '@baseland_text_fill': '#333',
        '@line_cap': 'round',
        '@trunk8_9': '#f8e4be',
        '@primary_outer': '#CCCCCC',
        '@trunk_inner': '#F5E7CA',
        '@primary_inner': '#faf6e1',
        '@secondary_outer': '#E1E1E1',
        '@tertiary_outer': '#E1E1E1'
    },
    'styles': [{
        'id': 'ne_baseland30m_polygon_style',
        'filter': "zoom>=0;zoom<=5;layerName='ne_baseland30m_polygon'",
        'style': [{
            'polygon-fill': '@baseland_polygon_fill'
        }]
    }, {
        'id': 'ne_baseland30m_point_label_style',
        'filter': "zoom>=2;zoom<=6;layerName='ne_baseland30m_point'",
        'style': [{
            'text-name': '@text_name',
            'text-fill': '@baseland_text_fill',
            'text-halo-fill': '@baseland_text_halo_fill',
            'text-halo-radius': '@radius',
            'text-wrap-before': false,
            'text-wrap-width': 36,
            'text-font': '500 12px sans-serif',
            'text-spacing': 0,
            'style': [{
                'filter': 'zoom=2;labelrank<=3'
            }, {
                'filter': 'zoom=3;labelrank<=4',
                'text-font': '600 13px sans-serif'
            }, {
                'filter': 'zoom>=4;zoom<=5;labelrank<=5',
                'text-font': '600 14px sans-serif'
            }, {
                'filter': 'zoom=6',
                'text-font': '600 16px sans-serif'
            }]
        }]
    }, {
        'id': 'ne_ocean_polygon_style',
        'filter': "zoom>=0;zoom<=19;layerName='ne_ocean1m_polygon'",
        'style': [{
            'polygon-fill': '#a0cfeb'
        }]
    }, {
        'id': 'ne_place2m_point_label_style',
        'filter': "zoom>=4;zoom<=6;natscale>=200;layerName='ne_place2m_point'",
        'style': [{
            'shield-icon-type': 'symbol',
            'shield-icon-symbol-type': 'circle',
            'shield-icon-size': 4,
            'shield-icon-outline-color': '#8f7979',
            'shield-name': 'name',
            'shield-font': '600 12px arial',
            'shield-dy': -18,
            'shield-fill': '#333',
            'shield-halo-fill': 'rgb(255, 255, 255)',
            'shield-halo-radius': 2
        }]
    }, {
        'id': 'ne_states_provinces10m_point_label_style',
        'style': [{
            'filter': 'zoom>=4;zoom<=11',
            'text-name': '@text_name',
            'text-halo-fill': '@baseland_text_halo_fill',
            'text-halo-radius': '@radius',
            'text-align': '@text_align',
            'text-placement-type': 'default',
            'text-placements': '@text_placements',
            'text-wrap-width': 20,
            'style': [{
                'filter': 'zoom>=4;zoom<=5',
                'text-fill': '#a9a9a9',
                'style': [{
                    'filter': 'labelrank<=2',
                    'text-font': '12px sans-serif'
                }, {
                    'filter': 'labelrank>2;labelrank<=4',
                    'text-font': '13px sans-serif'
                }]
            }, {
                'filter': 'zoom=6',
                'text-fill': '#a9a9a9',
                'text-font': '14px sans-serif'
            }, {
                'filter': 'zoom=7',
                'text-fill': '#a9a9a9',
                'text-font': '15px sans-serif'
            }, {
                'filter': 'zoom>=8;zoom<=9',
                'text-fill': '@baseland_text_fill',
                'text-font': '14px sans-serif'
            }]
        }],
        'filter': "layerName='ne_states_provinces10m_point'"
    }, {
        'id': 'osm_place_city_point_z7_label_style',
        'filter': "zoom=7;place='city';layerName='osm_place_city_point_z7'",
        'style': [{
            'text-name': '@text_name',
            'text-font': '600 12px sans-serif',
            'text-fill': '@baseland_text_fill',
            'text-halo-fill': '@baseland_text_halo_fill',
            'text-halo-radius': '@radius',
            'text-align': '@text_align',
            'text-placement-type': 'detect',
            'text-placements': '@text_placements'
        }]
    }, {
        'id': 'osm_place_city_town_point_z8-9_label_style',
        'style': [{
            'filter': 'zoom>=8;zoom<=9',
            'text-name': '@text_name',
            'text-fill': '@baseland_text_fill',
            'text-halo-fill': '@baseland_text_halo_fill',
            'text-halo-radius': '@radius',
            'text-align': '@text_align',
            'text-placement-type': 'detect',
            'text-placements': '@text_placements',
            'style': [{
                'filter': "place='city'",
                'text-font': '600 13px sans-serif'
            }, {
                'filter': "place='town'",
                'text-wrap-before': false,
                'text-wrap-width': 50,
                'text-font': '11px sans-serif'
            }]
        }],
        'filter': "layerName='osm_place_city_town_point_z8-9'"
    }, {
        'id': 'osm_place_point_label_z10-19_style',
        'style': [{
            'filter': 'zoom>=10;zoom<=19',
            'text-name': '@text_name',
            'text-fill': '@baseland_text_fill',
            'text-halo-fill': '@baseland_text_halo_fill',
            'text-halo-radius': '@radius',
            'style': [{
                'filter': 'zoom>=10;zoom<=11',
                'style': [{
                    'filter': "place='city'",
                    'text-font': 'bold 14px sans-serif'
                }, {
                    'filter': "place='town'",
                    'text-wrap-before': false,
                    'text-wrap-width': 50,
                    'text-font': '13px sans-serif'
                }, {
                    'filter': "place='village'",
                    'text-wrap-before': false,
                    'text-wrap-width': 30,
                    'text-font': '12px sans-serif'
                }]
            }, {
                'filter': 'zoom>=12;zoom<=13',
                'style': [{
                    'filter': "place='city'",
                    'text-font': '18px sans-serif'
                }, {
                    'filter': "place='town'",
                    'text-wrap-before': false,
                    'text-wrap-width': 50,
                    'text-font': '14px sans-serif'
                }, {
                    'filter': "place='village'",
                    'text-wrap-before': false,
                    'text-wrap-width': 50,
                    'text-font': '12px sans-serif'
                }]
            }, {
                'filter': 'zoom>=14;zoom<=19',
                'style': [{
                    'filter': "zoom=14;place='city'",
                    'text-font': '21px sans-serif'
                }, {
                    'filter': "place='town'",
                    'text-font': '18px sans-serif'
                }, {
                    'filter': "place='village'",
                    'text-font': '16px sans-serif'
                }]
            }]
        }],
        'filter': "layerName='osm_place_point_z10-19'"
    }, {
        'id': 'osm_baseland1m_polygon_style',
        'filter': "zoom>=6;zoom<=9;layerName='osm_baseland1m_polygon'",
        'style': [{
            'polygon-fill': '@baseland_polygon_fill'
        }]
    }, {
        'id': 'osm_baseland_polygon_style',
        'filter': "zoom>=10;zoom<=19;layerName='osm_baseland_polygon'",
        'style': [{
            'polygon-fill': '@baseland_polygon_fill'
        }]
    }, {
        'id': 'osm_land_polygon_boundary_z10-11_style',
        'filter': "zoom>=10;zoom<=11;layerName='osm_land_polygon_z10-11'",
        'style': [{
            'filter': "boundary='national_park,protected_area'",
            'style': [{
                'filter': "boundary='national_park'",
                'polygon-fill': '@national_park'
            }, {
                'filter': "boundary='protected_area'",
                'polygon-fill': '@protected_area'
            }]
        }]
    }, {
        'id': 'osm_land_polygon_landuse_z10-11_style',
        'filter': "zoom>=10;zoom<=11;layerName='osm_land_polygon_z10-11'",
        'style': [{
            'filter': "landuse='reservoir,orchard,vineyards,landfill,railway,cemetery,quarry,basin,village_green,recreation_ground,farmyard,farm,farmland,industrial,retail,commercial,forest,military,meadow,grass,residential'",
            'style': [{
                'filter': "landuse='reservoir'",
                'polygon-fill': '@reservoir'
            }, {
                'filter': "landuse='orchard'",
                'polygon-fill': '@orchardbackground',
                'polygon-foreground-fill': '@orchard',
                'polygon-hatch-style': 'Percent80',
                'polygon-brush-type': 'hatch'
            }, {
                'filter': "landuse='vineyards'",
                'polygon-fill': '@vineyardsbackground',
                'polygon-foreground-fill': '@vineyards',
                'polygon-hatch-style': 'Percent70',
                'polygon-brush-type': 'hatch'
            }, {
                'filter': "landuse='landfill'",
                'polygon-fill': '@landbackgroundfill',
                'polygon-foreground-fill': '@landfill',
                'polygon-hatch-style': 'Percent90',
                'polygon-brush-type': 'hatch'
            }, {
                'filter': "landuse='railway'",
                'polygon-fill': '@railway'
            }, {
                'filter': "landuse='cemetery'",
                'polygon-fill': '@cemetery'
            }, {
                'filter': "landuse='quarry'",
                'polygon-fill': '@quarry'
            }, {
                'filter': "landuse='basin'",
                'polygon-fill': '@basinbackground',
                'polygon-foreground-fill': '@basin',
                'polygon-hatch-style': 'Percent10',
                'polygon-brush-type': 'hatch'
            }, {
                'filter': "landuse='village_green'",
                'polygon-fill': '@village_green'
            }, {
                'filter': "landuse='recreation_ground'",
                'polygon-fill': '@recreation_ground'
            }, {
                'filter': "landuse='farmyard'",
                'polygon-fill': '@farmyard'
            }, {
                'filter': "landuse='farm'",
                'polygon-fill': '@farm'
            }, {
                'filter': "landuse='farmland'",
                'polygon-fill': '@farmland'
            }, {
                'filter': "landuse='industrial'",
                'polygon-fill': '@industrial'
            }, {
                'filter': "landuse='retail'",
                'polygon-fill': '@retail'
            }, {
                'filter': "landuse='commercial'",
                'polygon-fill': '@commercial'
            }, {
                'filter': "landuse='forest'",
                'polygon-fill': '@forest'
            }, {
                'filter': "landuse='military'",
                'polygon-fill': '@militarybackground',
                'polygon-foreground-fill': '@military',
                'polygon-hatch-style': 'BackwardDiagonal',
                'polygon-brush-type': 'hatch'
            }, {
                'filter': "landuse='meadow'",
                'polygon-fill': '@meadow'
            }, {
                'filter': "natural='grassland'",
                'polygon-fill': '@grassland'
            }, {
                'filter': "landuse='residential'",
                'polygon-fill': '@residential'
            }]
        }]
    }, {
        'id': 'osm_land_polygon_park_z10-11_style',
        'filter': "zoom>=10;zoom<=11;layerName='osm_land_polygon_z10-11'",
        'style': [{
            'filter': "leisure='park'",
            'style': [{
                'filter': "leisure='park'",
                'polygon-fill': '@park'
            }]
        }]
    }, {
        'id': 'osm_land_polygon_natural_z10-11_style',
        'filter': "zoom>=10;zoom<=11;layerName='osm_land_polygon_z10-11'",
        'style': [{
            'filter': "natural='beach,heath,mud,sand,wood,wetland,scrub'",
            'style': [{
                'filter': "natural='beach'",
                'polygon-fill': '@beach'
            }, {
                'filter': "natural='heath'",
                'polygon-fill': '@heath'
            }, {
                'filter': "natural='mud'",
                'polygon-fill': '@mudbackground',
                'polygon-foreground-fill': '@mud',
                'polygon-hatch-style': 'percent90',
                'polygon-brush-type': 'hatch'
            }, {
                'filter': "natural='sand'",
                'polygon-fill': '@sand'
            }, {
                'filter': "natural='wood'",
                'polygon-fill': '@wood'
            }, {
                'filter': "natural='wetland'",
                'polygon-fill': '@wetlandbackground',
                'polygon-foreground-fill': '@wetland',
                'polygon-hatch-style': 'Percent25',
                'polygon-brush-type': 'hatch'
            }, {
                'filter': "natural='scrub'",
                'polygon-fill': '@scrub'
            }]
        }]
    }, {
        'id': 'osm_land_polygon_leisure_z10-11_style',
        'filter': "zoom>=10;zoom<=11;layerName='osm_land_polygon_z10-11'",
        'style': [{
            'filter': "leisure='marina,water_park,common,playground,garden,dog_park,nature_reserve'",
            'style': [{
                'filter': "leisure='marina'",
                'polygon-fill': '@marina'
            }, {
                'filter': "leisure='water_park'",
                'polygon-fill': '@water_park'
            }, {
                'filter': "leisure='common'",
                'polygon-fill': '@common'
            }, {
                'filter': "leisure='playground'",
                'polygon-fill': '@playground',
                'polygon-outline-color': '@playgroundborder',
                'polygon-outline-width': 3
            }, {
                'filter': "leisure='garden'",
                'polygon-fill': '@garden'
            }, {
                'filter': "leisure='dog_park'",
                'polygon-fill': '@dog_park'
            }, {
                'filter': "leisure='nature_reserve'",
                'polygon-fill': '@nature_reserve'
            }]
        }]
    }, {
        'id': 'osm_land_polygon_tourism_z10-11_style',
        'filter': "zoom>=10;zoom<=11;layerName='osm_land_polygon_z10-11'",
        'style': [{
            'filter': "tourism='zoo'",
            'polygon-fill': '@zoo'
        }]
    }, {
        'id': 'osm_land_polygon_aeroway_z10-11_style',
        'filter': "zoom>=10;zoom<=11;layerName='osm_land_polygon_z10-11'",
        'style': [{
            'filter': "aeroway='helipad,aerodrome'",
            'style': [{
                'filter': "aeroway='helipad'",
                'polygon-fill': '@helipad'
            }, {
                'filter': "aeroway='aerodrome'",
                'polygon-fill': '@aerodrome'
            }]
        }]
    }, {
        'id': 'osm_land_polygon_boundary_z12-13_style',
        'filter': "zoom>=12;zoom<=13;layerName='osm_land_polygon_z12-13'",
        'style-first': true,
        'style': [{
            'filter': "boundary='national_park,protected_area'",
            'style': [{
                'filter': "boundary='national_park'",
                'polygon-fill': '@national_park'
            }, {
                'filter': "boundary='protected_area'",
                'polygon-fill': '@protected_area'
            }]
        }]
    }, {
        'id': 'osm_land_polygon_landuse_z12-13_style',
        'filter': "zoom>=12;zoom<=13;layerName='osm_land_polygon_z12-13'",
        'style': [{
            'filter': "landuse='reservoir,orchard,vineyards,landfill,railway,cemetery,quarry,basin,village_green,recreation_ground,farmyard,farm,farmland,industrial,retail,commercial,forest,military,meadow,residential'",
            'style': [{
                'filter': "landuse='reservoir'",
                'polygon-fill': '@reservoir'
            }, {
                'filter': "landuse='orchard'",
                'polygon-fill': '@orchardbackground',
                'polygon-foreground-fill': '@orchard',
                'polygon-hatch-style': 'Percent80',
                'polygon-brush-type': 'hatch'
            }, {
                'filter': "landuse='vineyards'",
                'polygon-fill': '@vineyardsbackground',
                'polygon-foreground-fill': '@vineyards',
                'polygon-hatch-style': 'Percent70',
                'polygon-brush-type': 'hatch'
            }, {
                'filter': "landuse='landfill'",
                'polygon-fill': '@landbackgroundfill',
                'polygon-foreground-fill': '@landfill',
                'polygon-hatch-style': 'Percent90',
                'polygon-brush-type': 'hatch'
            }, {
                'filter': "landuse='railway'",
                'polygon-fill': '@railway'
            }, {
                'filter': "landuse='cemetery'",
                'polygon-fill': '@cemetery'
            }, {
                'filter': "landuse='quarry'",
                'polygon-fill': '@quarry'
            }, {
                'filter': "landuse='basin'",
                'polygon-fill': '@basinbackground',
                'polygon-foreground-fill': '@basin',
                'polygon-hatch-style': 'Percent10',
                'polygon-brush-type': 'hatch'
            }, {
                'filter': "landuse='village_green'",
                'polygon-fill': '@village_green'
            }, {
                'filter': "landuse='recreation_ground'",
                'polygon-fill': '@recreation_ground'
            }, {
                'filter': "landuse='farmyard'",
                'polygon-fill': '@farmyard'
            }, {
                'filter': "landuse='farm'",
                'polygon-fill': '@farm'
            }, {
                'filter': "landuse='farmland'",
                'polygon-fill': '@farmland'
            }, {
                'filter': "landuse='industrial'",
                'polygon-fill': '@industrial'
            }, {
                'filter': "landuse='retail'",
                'polygon-fill': '@retail'
            }, {
                'filter': "landuse='commercial'",
                'polygon-fill': '@commercial'
            }, {
                'filter': "landuse='forest'",
                'polygon-fill': '@forest'
            }, {
                'filter': "landuse='military'",
                'polygon-fill': '@militarybackground',
                'polygon-foreground-fill': '@military',
                'polygon-hatch-style': 'BackwardDiagonal',
                'polygon-brush-type': 'hatch'
            }, {
                'filter': "landuse='meadow'",
                'polygon-fill': '@meadow'
            }, {
                'filter': "landuse='residential'",
                'polygon-fill': '@residential'
            }]
        }]
    }, {
        'id': 'osm_land_polygon_park_z12-13_style',
        'filter': "zoom>=12;zoom<=13;layerName='osm_land_polygon_z12-13'",
        'style': [{
            'filter': "leisure='park'",
            'style': [{
                'filter': "leisure='park'",
                'polygon-fill': '@park'
            }]
        }]
    }, {
        'id': 'osm_land_polygon_natural_z12-13_style',
        'filter': "zoom>=12;zoom<=13;layerName='osm_land_polygon_z12-13'",
        'style': [{
            'filter': "natural='beach,grassland,heath,mud,sand,wood,wetland'",
            'style': [{
                'filter': "natural='beach'",
                'polygon-fill': '@beach'
            }, {
                'filter': "natural='grassland'",
                'polygon-fill': '@grassland'
            }, {
                'filter': "natural='heath'",
                'polygon-fill': '@heath'
            }, {
                'filter': "natural='mud'",
                'polygon-fill': '@mudbackground',
                'polygon-foreground-fill': '@mud',
                'polygon-hatch-style': 'percent90',
                'polygon-brush-type': 'hatch'
            }, {
                'filter': "natural='sand'",
                'polygon-fill': '@sand'
            }, {
                'filter': "natural='wood'",
                'polygon-fill': '@wood'
            }, {
                'filter': "natural='wetland'",
                'polygon-fill': '@wetlandbackground',
                'polygon-foreground-fill': '@wetland',
                'polygon-hatch-style': 'Percent25',
                'polygon-brush-type': 'hatch'
            }]
        }]
    }, {
        'id': 'osm_land_polygon_leisure_z12-13_style',
        'filter': "zoom>=12;zoom<=13;layerName='osm_land_polygon_z12-13'",
        'style': [{
            'filter': "leisure='marina,water_park,track,common,sports_center,golf_course,garden,dog_park,nature_reserve'",
            'style': [{
                'filter': "leisure='marina'",
                'polygon-fill': '@marina'
            }, {
                'filter': "leisure='water_park'",
                'polygon-fill': '@water_park'
            }, {
                'filter': "leisure='track'",
                'polygon-fill': '@track'
            }, {
                'filter': "leisure='common'",
                'polygon-fill': '@common'
            }, {
                'filter': "leisure='sports_centre'",
                'polygon-fill': '@sports_centre'
            }, {
                'filter': "leisure='golf_course'",
                'polygon-fill': '@golf_course'
            }, {
                'filter': "leisure='garden'",
                'polygon-fill': '@garden'
            }, {
                'filter': "leisure='dog_park'",
                'polygon-fill': '@dog_park'
            }, {
                'filter': "leisure='nature_reserve'",
                'polygon-fill': '@nature_reserve'
            }]
        }]
    }, {
        'id': 'osm_land_polygon_tourism_z12-13_style',
        'filter': "zoom>=12;zoom<=13;layerName='osm_land_polygon_z12-13'",
        'style': [{
            'filter': "tourism='zoo'",
            'polygon-fill': '@zoo'
        }]
    }, {
        'id': 'osm_land_polygon_aeroway_z12-13_style',
        'filter': "zoom>=12;zoom<=13;layerName='osm_land_polygon_z12-13'",
        'style': [{
            'filter': "aeroway='helipad,aerodrome'",
            'style': [{
                'filter': "aeroway='helipad'",
                'polygon-fill': '@helipad'
            }, {
                'filter': "aeroway='aerodrome'",
                'polygon-fill': '@aerodrome'
            }]
        }]
    }, {
        'id': 'ne_road20m_linestring_style',
        'filter': "zoom=5;scalerank<=4;layerName='ne_road10m_linestring'",
        'style': [{
            'line-color': '@motorway6_9',
            'line-width': 1
        }]
    }, {
        'id': 'ne_road10m_linestring_style',
        'filter': "zoom=6;scalerank<=6;layerName='ne_road10m_linestring'",
        'style': [{
            'line-color': '@motorway6_9',
            'line-width': 1
        }]
    }, {
        'id': 'osm_land_polygon_boundary_z14-19_style',
        'filter': "zoom>=14;zoom<=19;layerName='osm_land_polygon_z14-19'",
        'style': [{
            'filter': "boundary='national_park,protected_area'",
            'style': [{
                'filter': "boundary='national_park'",
                'polygon-fill': '@national_park',
                'polygon-outline-color': '@national_park',
                'polygon-outline-width': 1
            }, {
                'filter': "boundary='protected_area'",
                'polygon-fill': '@protected_area',
                'polygon-outline-color': '@protected_area',
                'polygon-outline-width': 1
            }]
        }]
    }, {
        'id': 'osm_land_polygon_landuse_z14-19_style',
        'filter': "zoom>=14;zoom<=19;layerName='osm_land_polygon_z14-19'",
        'style': [{
            'filter': "landuse='reservoir,orchard,vineyards,landfill,railway,cemetery,quarry,basin,village_green,recreation_ground,farmyard,farm,farmland,industrial,retail,commercial,forest,military,meadow,residential'",
            'style': [{
                'filter': "landuse='reservoir'",
                'polygon-fill': '@reservoir',
                'polygon-outline-color': '@reservoir',
                'polygon-outline-width': 1
            }, {
                'filter': "landuse='orchard'",
                'polygon-fill': '@orchardbackground',
                'polygon-foreground-fill': '@orchard',
                'polygon-hatch-style': 'Percent80',
                'polygon-brush-type': 'hatch'
            }, {
                'filter': "landuse='vineyards'",
                'polygon-fill': '@vineyardsbackground',
                'polygon-foreground-fill': '@vineyards',
                'polygon-hatch-style': 'Percent70',
                'polygon-brush-type': 'hatch'
            }, {
                'filter': "landuse='landfill'",
                'polygon-fill': '@landbackgroundfill',
                'polygon-foreground-fill': '@landfill',
                'polygon-hatch-style': 'Percent90',
                'polygon-brush-type': 'hatch'
            }, {
                'filter': "landuse='railway'",
                'polygon-fill': '@railway'
            }, {
                'filter': "landuse='cemetery'",
                'polygon-fill': '@cemetery'
            }, {
                'filter': "landuse='quarry'",
                'polygon-fill': '@quarry'
            }, {
                'filter': "landuse='basin'",
                'polygon-fill': '@basinbackground',
                'polygon-foreground-fill': '@basin',
                'polygon-hatch-style': 'Percent10',
                'polygon-brush-type': 'hatch'
            }, {
                'filter': "landuse='village_green'",
                'polygon-fill': '@village_green'
            }, {
                'filter': "landuse='recreation_ground'",
                'polygon-fill': '@recreation_ground'
            }, {
                'filter': "landuse='farmyard'",
                'polygon-fill': '@farmyard'
            }, {
                'filter': "landuse='farm'",
                'polygon-fill': '@farm'
            }, {
                'filter': "landuse='farmland'",
                'polygon-fill': '@farmland'
            }, {
                'filter': "landuse='industrial'",
                'polygon-fill': '@industrial'
            }, {
                'filter': "landuse='retail'",
                'polygon-fill': '@retail'
            }, {
                'filter': "landuse='commercial'",
                'polygon-fill': '@commercial'
            }, {
                'filter': "landuse='forest'",
                'polygon-fill': '@forest'
            }, {
                'filter': "landuse='military'",
                'polygon-fill': '@militarybackground',
                'polygon-foreground-fill': '@military',
                'polygon-hatch-style': 'BackwardDiagonal',
                'polygon-brush-type': 'hatch'
            }, {
                'filter': "landuse='meadow'",
                'polygon-fill': '@meadow'
            }, {
                'filter': "landuse='residential'",
                'polygon-fill': '@residential'
            }]
        }]
    }, {
        'id': 'osm_land_polygon_park_z14-19_style',
        'filter': "zoom>=14;zoom<=19;layerName='osm_land_polygon_z14-19'",
        'style': [{
            'filter': "leisure='park'",
            'style': [{
                'filter': "leisure='park'",
                'polygon-fill': '@park'
            }]
        }]
    }, {
        'id': 'osm_land_polygon_amenity_z14-19_style',
        'filter': "zoom>=14;zoom<=19;layerName='osm_land_polygon_z14-19'",
        'style': [{
            'filter': "amenity='school,kindergarten,college,university'",
            'style': [{
                'filter': "amenity='school'",
                'polygon-fill': '@school'
            }, {
                'filter': "amenity='kindergarten'",
                'polygon-fill': '@kindergarten'
            }, {
                'filter': "amenity='college'",
                'polygon-fill': '@college'
            }, {
                'filter': "amenity='university'",
                'polygon-fill': '@university'
            }]
        }]
    }, {
        'id': 'osm_land_polygon_natural_z14-19_style',
        'filter': "zoom>=14;zoom<=19;layerName='osm_land_polygon_z14-19'",
        'style': [{
            'filter': "natural='beach,grassland,heath,mud,sand,wood,wetland'",
            'style': [{
                'filter': "natural='beach'",
                'polygon-fill': '@beach'
            }, {
                'filter': "natural='grassland'",
                'polygon-fill': '@grassland'
            }, {
                'filter': "natural='heath'",
                'polygon-fill': '@heath'
            }, {
                'filter': "natural='mud'",
                'polygon-fill': '@mudbackground',
                'polygon-foreground-fill': '@mud',
                'polygon-hatch-style': 'percent90',
                'polygon-brush-type': 'hatch'
            }, {
                'filter': "natural='sand'",
                'polygon-fill': '@sand'
            }, {
                'filter': "natural='wood'",
                'polygon-fill': '@wood'
            }, {
                'filter': "natural='wetland'",
                'polygon-fill': '@wetlandbackground',
                'polygon-foreground-fill': '@wetland',
                'polygon-hatch-style': 'Percent25',
                'polygon-brush-type': 'hatch'
            }]
        }]
    }, {
        'id': 'osm_land_polygon_leisure_z14-19_style',
        'filter': "zoom>=14;zoom<=19;layerName='osm_land_polygon_z14-19'",
        'style': [{
            'filter': "leisure='track,common,sports_centre,golf_course,garden,dog_park,nature_reserve'",
            'style': [{
                'filter': "leisure='track'",
                'polygon-fill': '@track'
            }, {
                'filter': "leisure='park'",
                'polygon-fill': '@park'
            }, {
                'filter': "leisure='common'",
                'polygon-fill': '@common'
            }, {
                'filter': "leisure='sports_centre'",
                'polygon-fill': '@sports_centre'
            }, {
                'filter': "leisure='golf_course'",
                'polygon-fill': '@golf_course',
                'polygon-outline-color': '@golf_course',
                'polygon-outline-width': 1
            }, {
                'filter': "leisure='garden'",
                'polygon-fill': '@garden'
            }, {
                'filter': "leisure='dog_park'",
                'polygon-fill': '@dog_park'
            }, {
                'filter': "leisure='nature_reserve'",
                'polygon-fill': '@nature_reserve'
            }]
        }]
    }, {
        'id': 'osm_land_polygon_tourism_14-19_style',
        'filter': "zoom>=14;zoom<=19;layerName='osm_land_polygon_z14-19'",
        'style': [{
            'filter': "tourism='attraction,zoo'",
            'style': [{
                'filter': "tourism='attraction'",
                'polygon-fill': '@attraction',
                'polygon-outline-color': '@attractionborder',
                'polygon-outline-width': 1
            }, {
                'filter': "tourism='zoo'",
                'polygon-fill': '@zoo'
            }]
        }]
    }, {
        'id': 'osm_land_polygon_aeroway_z14-19_style',
        'filter': "zoom>=14;zoom<=19;layerName='osm_land_polygon_z14-19'",
        'style': [{
            'filter': "aeroway='helipad,aerodrome'",
            'style': [{
                'filter': "aeroway='helipad'",
                'polygon-fill': '@helipad'
            }, {
                'filter': "aeroway='aerodrome'",
                'polygon-fill': '@aerodrome'
            }]
        }]
    }, {
        'id': 'osm_land_polygon_amenity_z14-19_style',
        'filter': "zoom>=14;zoom<=19;layerName='osm_land_polygon_z14-19'",
        'style': [{
            'filter': "amenity='parking'",
            'style': [{
                'filter': "amenity='parking'",
                'polygon-fill': '@parking'
            }]
        }]
    }, {
        'id': 'osm_land_polygon_z14-19_special_style',
        'filter': "zoom>=14;zoom<=19;layerName='osm_land_polygon_z14-19'",
        'style': [{
            'filter': "landuse='grass'",
            'polygon-fill': '@grass'
        }, {
            'filter': "landuse='cemetery'",
            'polygon-fill': '@cemetery'
        }, {
            'filter': "leisure='pitch'",
            'polygon-fill': '@pitch',
            'polygon-outline-color': '@pitchborder',
            'polygon-outline-width': 1
        }, {
            'filter': "leisure='stadium'",
            'polygon-fill': '@stadium',
            'polygon-outline-color': '@stadiumborder',
            'polygon-outline-width': 1
        }, {
            'filter': "natural='scrub'",
            'polygon-fill': '@scrub'
        }, {
            'filter': "leisure='swimming_pool'",
            'polygon-fill': '@swimming_pool',
            'polygon-outline-color': '@swimming_poolborder',
            'polygon-outline-width': 1
        }, {
            'filter': "leisure='marina'",
            'polygon-fill': '@marina'
        }, {
            'filter': "leisure='water_park'",
            'polygon-fill': '@water_park'
        }, {
            'filter': "leisure='playground'",
            'polygon-fill': '@playground',
            'polygon-outline-color': '@playgroundborder',
            'polygon-outline-width': 1
        }, {
            'filter': "tourism='attraction'",
            'polygon-fill': '@attraction'
        }]
    }, {
        'id': 'osm_land_polygon_z14-19_label_style',
        'filter': "zoom>=14;zoom<=19;layerName='osm_land_point_z14-19'",
        'style': [{
            'text-name': '@text_name',
            'text-fill': '@polygon_text',
            'text-halo-fill': '@baseland_text_halo_fill',
            'text-halo-radius': '@radius',
            'text-wrap-before': false,
            'text-wrap-width': 50,
            'style': [{
                'filter': 'zoom>=14;zoom<=16',
                'text-font': '12px sans-serif'
            }, {
                'filter': 'zoom>=17;zoom<=19',
                'text-font': '16px sans-serif'
            }]
        }]
    }, {
        'id': 'ne_water10m_polygon_style',
        'filter': "zoom>=0;zoom<=5;scalerank='0,1,2';layerName='ne_water10m_polygon'",
        'style': [{
            'polygon-fill': 'rgb(160,207,235)',
            'polygon-outline-color': 'rgba(255,255,255,0.2)'
        }]
    }, {
        'id': 'osm_water_polygon_z6-9_style',
        'filter': "zoom>=6;zoom<=9;layerName='osm_water_polygon_z6-9'",
        'style': [{
            'polygon-fill': '@water'
        }]
    }, {
        'id': 'osm_water_polygon_z10-12_style',
        'filter': "zoom>=10;zoom<=12;layerName='osm_water_polygon_z10-12'",
        'style': [{
            'polygon-fill': '@water'
        }]
    }, {
        'id': 'osm_water_polygon_z10-12_label_style',
        'filter': "zoom>=10;zoom<=12;layerName='osm_water_point_z10-12';osm_area>=6000000",
        'style': [{
            'text-name': '@text_name',
            'text-font': 'italic 9px sans-serif',
            'text-fill': '@water_text_fill',
            'text-halo-fill': '@water_text_halo_fill',
            'text-halo-radius': '@radius',
            'text-wrap-before': false,
            'text-wrap-width': 20
        }]
    }, {
        'id': 'osm_water_polygon_z13-19_style',
        'filter': "zoom>=13;zoom<=19;layerName='osm_water_polygon_z13-19'",
        'style': [{
            'polygon-fill': '@water'
        }]
    }, {
        'id': 'osm_water_polygon_z13-19_label_style',
        'filter': "zoom>=13;zoom<=19;layerName='osm_water_point_z13-19'",
        'style': [{
            'text-name': '@text_name',
            'text-font': 'italic 8px sans-serif',
            'text-fill': '@water_text_fill',
            'text-halo-fill': '@water_text_halo_fill',
            'text-halo-radius': '@radius',
            'text-wrap-before': false,
            'text-wrap-width': 20
        }]
    }, {
        'id': 'osm_water_linestring_z11-13_style',
        'filter': "zoom>=11;zoom<=13;layerName='osm_water_linestring_z11-13'",
        'style': [{
            'line-color': '#A0CFEB',
            'line-width': '1'
        }]
    }, {
        'id': 'osm_water_linestring_z14-19_style',
        'filter': "zoom>=14;zoom<=19;layerName='osm_water_linestring_z14-19'",
        'style': [{
            'line-color': '#A0CFEB',
            'style': [{
                'filter': 'zoom>=14;zoom<=16',
                'line-width': 2
            }, {
                'filter': 'zoom>=17;zoom<=19',
                'line-width': 4
            }]
        }]
    }, {
        'id': 'osm_water_linestring_z14-19_label_style',
        'style': [{
            'filter': 'zoom>=14;zoom<=19',
            'text-name': '@text_name',
            'text-fill': '@water_text_fill',
            'text-halo-fill': '@water_text_halo_fill',
            'text-halo-radius': '@radius',
            'text-wrap-before': false,
            'text-wrap-width': 20,
            'line-color': '#A0CFEB',
            'style': [{
                'filter': 'zoom>=14;zoom<=16',
                'text-font': 'italic 10px sans-serif'
            }, {
                'filter': 'zoom>=17;zoom<=19',
                'text-font': 'italic 12px sans-serif'
            }]
        }],
        'filter': "layerName='osm_water_linestring_z14-19'"
    }, {
        'id': 'osm_transport_polygon_z12-19_style',
        'style': [{
            'filter': 'zoom>=12;zoom<=19',
            'style': [{
                'filter': "aeroway='apron'",
                'polygon-fill': '@apron',
                'polygon-outline-color': '#9999cc',
                'polygon-outline-width': 1
            }, {
                'filter': "aeroway='runway'",
                'polygon-fill': '@runway'
            }]
        }, {
            'filter': 'zoom>=15;zoom<=19',
            'style': [{
                'filter': "man_made='pier'",
                'polygon-fill': '@pier'
            }, {
                'filter': "aeroway='apron'",
                'polygon-fill': '@apron'
            }]
        }],
        'filter': "layerName='osm_transport_polygon_z12-19'"
    }, {
        'id': 'osm_transport_linestring_z12-19_style',
        'style': [{
            'filter': 'zoom>=12;zoom<=14',
            'style': [{
                'filter': "railway='rail'",
                'line-width': 2,
                'line-color': '@rail_outer',
                'line-width-inner': 1,
                'line-color-inner': '@rail_inner',
                'line-width-center': 2,
                'line-color-center': '@rail_center',
                'line-dasharray-center': '@array1'
            }, {
                'filter': "railway='tram'",
                'line-width': 1,
                'line-color': '@tram_outer',
                'line-width-inner': 1,
                'line-color-inner': '@tram_inner',
                'line-width-center': 1,
                'line-color-center': '@tram_center',
                'line-dasharray-center': '@array1'
            }, {
                'filter': "railway='subway'",
                'line-width': 2,
                'line-color': '@subway_outer',
                'line-width-inner': 1,
                'line-color-inner': '@subway_inner',
                'line-width-center': 3,
                'line-color-center': '@subway_center',
                'line-dasharray-center': '@array1'
            }]
        }, {
            'filter': 'zoom>=15;zoom<=16',
            'style': [{
                'filter': "railway='rail'",
                'line-width': 4,
                'line-color': '@rail_outer',
                'line-width-inner': 2,
                'line-color-inner': '@rail_inner',
                'line-width-center': 6,
                'line-color-center': '@rail_center',
                'line-dasharray-center': '@array1'
            }, {
                'filter': "railway='tram'",
                'line-width': 2,
                'line-color': '@tram_outer',
                'line-width-inner': 1,
                'line-color-inner': '@tram_inner',
                'line-width-center': 3,
                'line-color-center': '@tram_center'
            }, {
                'filter': "railway='subway'",
                'line-width': 4,
                'line-color': '@subway_outer',
                'line-width-inner': 2,
                'line-color-inner': '@subway_inner',
                'line-width-center': 6,
                'line-color-center': '@subway_center',
                'line-dasharray-center': '@array1'
            }, {
                'filter': "railway='narrow_gauge'",
                'line-width': 4,
                'line-color': '@narrow_gauge_outer',
                'line-width-inner': 2,
                'line-color-inner': '@narrow_gauge_inner',
                'line-width-center': 6,
                'line-color-center': '@narrow_gauge_center',
                'line-dasharray-center': '@array2'
            }, {
                'filter': "railway='light_rail'",
                'line-width': 2,
                'line-color': '@light_rail_outer',
                'line-width-inner': 1,
                'line-color-inner': '@light_rail_inner',
                'line-width-center': 3,
                'line-color-center': '@light_rail_center',
                'line-dasharray-center': '3,10'
            }, {
                'filter': "railway='miniature'",
                'line-width': 2,
                'line-color': '@miniature_outer',
                'line-width-inner': 1,
                'line-color-inner': '@miniature_inner',
                'line-width-center': 3,
                'line-color-center': '@miniature_center',
                'line-dasharray-center': '@array2'
            }, {
                'filter': "railway='monorail'",
                'line-width': 4,
                'line-color': '@monorail_outer',
                'line-width-inner': 2,
                'line-color-inner': '@monorail_inner',
                'line-width-center': 1,
                'line-color-center': '@monorail_center',
                'line-dasharray-center': '@array2'
            }]
        }, {
            'filter': 'zoom>=17;zoom<=19',
            'style': [{
                'filter': "railway='rail'",
                'line-width': 8,
                'line-color': '@rail_outer',
                'line-width-inner': 4,
                'line-color-inner': '@rail_inner',
                'line-width-center': 12,
                'line-color-center': '@rail_center',
                'line-dasharray-center': '@array1'
            }, {
                'filter': "railway='tram'",
                'line-width': 6,
                'line-color': '@tram_outer',
                'line-width-inner': 3,
                'line-color-inner': '@tram_inner',
                'line-width-center': 9,
                'line-color-center': '@tram_center',
                'line-dasharray-center': '@array1'
            }, {
                'filter': "railway='subway'",
                'line-width': 8,
                'line-color': '@subway_outer',
                'line-width-inner': 4,
                'line-color-inner': '@subway_inner',
                'line-width-center': 12,
                'line-color-center': '@subway_center',
                'line-dasharray-center': '@array1'
            }, {
                'filter': "railway='narrow_gauge'",
                'line-width': 8,
                'line-color': '@narrow_gauge_outer',
                'line-width-inner': 6,
                'line-color-inner': '@narrow_gauge_inner',
                'line-width-center': 10,
                'line-color-center': '@narrow_gauge_center',
                'line-dasharray-center': '@array2'
            }, {
                'filter': "railway='light_rail'",
                'line-width': 6,
                'line-color': '@light_rail_outer',
                'line-width-inner': 4,
                'line-color-inner': '@light_rail_inner',
                'line-width-center': 8,
                'line-color-center': '@light_rail_center',
                'line-dasharray-center': '3,10'
            }, {
                'filter': "railway='miniature'",
                'line-width': 4,
                'line-color': '@miniature_outer',
                'line-width-inner': 2,
                'line-color-inner': '@miniature_inner',
                'line-width-center': 6,
                'line-color-center': '@miniature_center',
                'line-dasharray-center': '@array2'
            }, {
                'filter': "railway='monorail'",
                'line-width': 6,
                'line-color': '@monorail_outer',
                'line-width-inner': 4,
                'line-color-inner': '@monorail_inner',
                'line-width-center': 2,
                'line-color-center': '@monorail_center',
                'line-dasharray-center': '@array2'
            }]
        }],
        'filter': "layerName='osm_transport_linestring_z12-19'"
    }, {
        'id': 'osm_transport_linestring_z12-19_aeroway_style',
        'style': [{
            'filter': 'zoom>=12;zoom<=19',
            'line-opacity': 1,
            'line-cap': '@line_cap',
            'style': [{
                'filter': 'zoom>=12;zoom<=14',
                'style': [{
                    'filter': "aeroway='taxiway'",
                    'line-color': '@taxiway_outer',
                    'line-width': 1
                }, {
                    'filter': "aeroway='runway'",
                    'line-width': 2,
                    'line-color': '@runway_outer'
                }, {
                    'filter': "aeroway='cable_car'",
                    'line-width': 1,
                    'line-color': '@cable_car_outer'
                }]
            }, {
                'filter': 'zoom>=15;zoom<=16',
                'style': [{
                    'filter': "aeroway='taxiway'",
                    'line-color': '@taxiway_outer',
                    'line-width': 3
                }, {
                    'filter': "aeroway='runway'",
                    'line-width': 4,
                    'line-color': '@runway_outer'
                }, {
                    'filter': "aeroway='cable_car'",
                    'line-width': 2,
                    'line-color': '@cable_car_outer'
                }, {
                    'filter': "aeroway='pier'",
                    'line-width': 1,
                    'line-color': '@pier_outer'
                }]
            }, {
                'filter': 'zoom>=17;zoom<=19',
                'style': [{
                    'filter': "aeroway='taxiway'",
                    'line-color': '@taxiway_outer',
                    'line-width': 6
                }, {
                    'filter': "aeroway='runway'",
                    'line-width': 8,
                    'line-color': '@runway_outer'
                }, {
                    'filter': "aeroway='cable_car'",
                    'line-width': 3,
                    'line-color': '@cable_car_outer'
                }, {
                    'filter': "aeroway='pier'",
                    'line-width': 4,
                    'line-color': '@pier_outer'
                }]
            }]
        }],
        'filter': "layerName='osm_transport_linestring_z12-19'"
    }, {
        'id': 'osm_road_linestring_z7-8_style',
        'style': [{
            'filter': 'zoom>=7;zoom<=8',
            'line-cap': '@line_cap',
            'style': [{
                'filter': 'zoom=7',
                'line-width': 1,
                'style': [{
                    'filter': "highway='trunk'",
                    'line-color': '@trunk8_9'
                }, {
                    'filter': "highway='motorway'",
                    'line-color': '@motorway6_9'
                }]
            }, {
                'filter': 'zoom=8',
                'style': [{
                    'filter': "highway='motorway'",
                    'line-color': '@motorway6_9',
                    'line-width': 2
                }, {
                    'filter': "highway='trunk'",
                    'line-color': '@trunk8_9',
                    'line-width': 2
                }, {
                    'filter': "highway='primary'",
                    'line-color': '@primary_outer',
                    'line-width': 1
                }]
            }]
        }],
        'filter': "layerName='osm_road_linestring'"
    }, {
        'id': 'osm_road_linestring_z9-11_style',
        'style': [{
            'filter': 'zoom>=9;zoom<=11',
            'line-cap': '@line_cap',
            'style': [{
                'filter': 'zoom=9',
                'style': [{
                    'filter': "highway='trunk'",
                    'line-color': '@trunk_outer',
                    'line-width': 3,
                    'children': [{
                        'line-width': 1,
                        'line-color': '@trunk_inner'
                    }]
                }, {
                    'filter': "highway='primary'",
                    'line-color': '@primary_outer',
                    'line-width': 2
                }, {
                    'filter': "highway='motorway'",
                    'line-color': '@motorway_outer',
                    'line-width': 3,
                    'children': [{
                        'line-width': 1,
                        'line-color': '#ffdebe'
                    }]
                }]
            }, {
                'filter': 'zoom=10',
                'style': [{
                    'filter': "highway='trunk'",
                    'line-color': '@trunk_outer',
                    'line-width': 4,
                    'children': [{
                        'line-width': 1,
                        'line-color': '@primary_inner'
                    }]
                }, {
                    'filter': "highway='primary'",
                    'line-color': '@primary_outer',
                    'line-width': 3,
                    'children': [{
                        'line-width': 2,
                        'line-color': '@trunk_inner'
                    }]
                }, {
                    'filter': "highway='motorway'",
                    'line-color': '@motorway_outer',
                    'line-width': 4,
                    'children': [{
                        'line-width': 3,
                        'line-color': '@motorway_inner'
                    }]
                }]
            }, {
                'filter': 'zoom=11',
                'style': [{
                    'filter': "highway='motorway'",
                    'line-width': 4,
                    'line-color': '@motorway_outer',
                    'children': [{
                        'line-width': 2,
                        'line-color': '@motorway_inner'
                    }]
                }, {
                    'filter': "highway='trunk'",
                    'line-width': 4,
                    'line-color': '@trunk_outer',
                    'children': [{
                        'line-width': 2,
                        'line-color': '@trunk_inner'
                    }]
                }, {
                    'filter': "highway='primary'",
                    'line-color': '@primary_outer',
                    'line-width': 3,
                    'children': [{
                        'line-width': 1,
                        'line-color': '@primary_inner'
                    }]
                }, {
                    'filter': "highway='secondary'",
                    'line-color': '@secondary_outer',
                    'line-width': 2
                }, {
                    'filter': "highway='tertiary'",
                    'line-color': '@tertiary_outer',
                    'line-width': 1
                }]
            }]
        }],
        'filter': "layerName='osm_road_linestring'"
    }, {
        'id': 'osm_road_linestring_label_z9-11_shield_style',
        'style': [{
            'filter': "zoom>=9;zoom<=10;ref=~'^((?!;).)*$';highway='motorway'",
            'text-name': '@shield_name',
            'text-fill': '@shield_fill',
            'text-font': 'bold 8px sans-serif',
            'text-halo-fill': '@baseland_text_halo_fill',
            'text-halo-radius': '@radius',
            'text-force-horizontal-for-line': true,
            'text-max-char-angle': 0,
            'text-spacing': 100,
            'text-mask-color': '#f9d7a7',
            'text-mask-outline-color': '#999999',
            'text-mask-outline-width': 2,
            'text-mask-type': 'RoundedCorners',
            'text-mask-margin': 2
        }, {
            'filter': "zoom=11;ref=~'^((?!;).)*$';highway='motorway,trunk'",
            'text-name': '@shield_name',
            'text-fill': '@shield_fill',
            'text-font': 'bold 8px sans-serif',
            'text-halo-fill': '@baseland_text_halo_fill',
            'text-halo-radius': '@radius',
            'text-force-horizontal-for-line': true,
            'text-max-char-angle': 0,
            'text-spacing': 100,
            'text-mask-color': '#f9d7a7',
            'text-mask-outline-color': '#999999',
            'text-mask-outline-width': 2,
            'text-mask-type': 'RoundedCorners',
            'text-mask-margin': 2
        }],
        'filter': "layerName='osm_road_linestring'"
    }, {
        'id': 'osm_road_linestring_z12-13_line_style',
        'style': [{
            'filter': 'zoom=12',
            'style': [{
                'filter': "highway='motorway'",
                'line-color': '@motorway_outer',
                'line-width': 6,
                'children': [{
                    'line-color': '@motorway_inner',
                    'line-width': 4
                }]
            }, {
                'filter': "highway='trunk'",
                'line-color': '@trunk_outer',
                'line-width': 6,
                'children': [{
                    'line-color': '@trunk_inner',
                    'line-width': 4
                }]
            }, {
                'filter': "highway='primary'",
                'line-color': '@primary_outer',
                'line-width': 4,
                'children': [{
                    'line-color': '@primary_inner',
                    'line-width': 2
                }]
            }, {
                'filter': "highway='secondary'",
                'line-color': '@secondary_outer',
                'line-width': 3,
                'children': [{
                    'line-color': '@secondary_inner',
                    'line-width': 1
                }]
            }, {
                'filter': "highway='tertiary'",
                'line-color': '@tertiary_outer',
                'line-width': 3,
                'children': [{
                    'line-color': '@tertiary_inner',
                    'line-width': 1
                }]
            }, {
                'filter': "highway='unclassified'",
                'line-color': '@unclassified_outer',
                'line-width': 1
            }, {
                'filter': "highway='road'",
                'line-color': '@road_outer',
                'line-width': 1
            }]
        }, {
            'filter': 'zoom=13',
            'style': [{
                'filter': "highway='motorway,trunk'",
                'line-width': 6,
                'style': [{
                    'filter': "highway='motorway'",
                    'line-color': '@motorway_outer',
                    'children': [{
                        'line-color': '@motorway_inner',
                        'line-width': 4
                    }]
                }, {
                    'filter': "highway='trunk'",
                    'line-color': '@trunk_outer',
                    'children': [{
                        'line-color': '@trunk_inner',
                        'line-width': 4
                    }]
                }]
            }, {
                'filter': "highway='primary'",
                'line-color': '@primary_outer',
                'line-width': 4,
                'children': [{
                    'line-color': '@primary_inner',
                    'line-width': 2
                }]
            }, {
                'filter': "highway='secondary'",
                'line-color': '@secondary_outer',
                'line-width': 3,
                'children': [{
                    'line-color': '@secondary_inner',
                    'line-width': 1
                }]
            }, {
                'filter': "highway='tertiary'",
                'line-color': '@tertiary_outer',
                'line-width': 3,
                'children': [{
                    'line-color': '@tertiary_inner',
                    'line-width': 1
                }]
            }, {
                'filter': "highway='living_street'",
                'line-color': '@living_street_outer',
                'line-width': 1
            }, {
                'filter': "highway='service'",
                'line-color': '@service_outer',
                'line-width': 1
            }, {
                'filter': "highway='motorway_link,trunk_link,primary_link,secondary_link,tertiary_link,residential,unclassified,road'",
                'line-width': 1,
                'style': [{
                    'filter': "highway='motorway_link'",
                    'line-color': '@motorway_link_outer'
                }, {
                    'filter': "highway='trunk_link'",
                    'line-color': '@trunk_link_outer'
                }, {
                    'filter': "highway='primary_link'",
                    'line-color': '@primary_link_outer'
                }, {
                    'filter': "highway='secondary_link'",
                    'line-color': '@secondary_link_outer'
                }, {
                    'filter': "highway='tertiary_link'",
                    'line-color': '@tertiary_link_outer'
                }, {
                    'filter': "highway='residential'",
                    'line-color': '@residential_outer',
                    'children': [{
                        'line-color': '#E1E1E1'
                    }]
                }, {
                    'filter': "highway='unclassified'",
                    'line-color': '@unclassified_outer',
                    'children': [{
                        'line-color': '#E1E1E1'
                    }]
                }, {
                    'filter': "highway='road'",
                    'line-color': '@road_outer'
                }]
            }]
        }],
        'filter': "layerName='osm_road_linestring'"
    }, {
        'id': 'osm_road_linestring_z13_label_style',
        'filter': "zoom=13;layerName='osm_road_linestring'",
        'style': [{
            'text-name': '@text_name',
            'text-fill': '@baseland_text_fill',
            'text-halo-fill': '@baseland_text_halo_fill',
            'text-halo-radius': '@radius',
            'text-spacing': 0,
            'text-font': '12px sans-serif',
            'style': [{
                'filter': "highway='motorway,trunk,primary,seconday'"
            }]
        }]
    }, {
        'id': 'osm_road_linestring_label_z12-13_shield_style',
        'style': [{
            'filter': "zoom=12;ref=~'^((?!;).)*$';highway='motorway,trunk'",
            'text-name': '@shield_name',
            'text-fill': '@shield_fill',
            'text-font': 'bold 8px sans-serif',
            'text-halo-fill': '@baseland_text_halo_fill',
            'text-halo-radius': '@radius',
            'text-align': '@text_align',
            'text-force-horizontal-for-line': true,
            'text-max-char-angle': 0,
            'text-spacing': 60,
            'text-mask-color': '#f9d7a7',
            'text-mask-outline-color': '#999999',
            'text-mask-outline-width': 2,
            'text-mask-type': 'RoundedCorners',
            'text-mask-margin': 2
        }, {
            'filter': "zoom=12;ref=~'^((?!;).)*$';highway='primary'",
            'text-name': '@shield_name',
            'text-fill': '@shield_fill',
            'text-font': 'bold 8px sans-serif',
            'text-halo-fill': '@baseland_text_halo_fill',
            'text-halo-radius': '@radius',
            'text-align': '@text_align',
            'text-force-horizontal-for-line': true,
            'text-max-char-angle': 0,
            'text-spacing': 60,
            'text-mask-color': '#fff7d5',
            'text-mask-outline-color': '#999999',
            'text-mask-outline-width': 2,
            'text-mask-type': 'RoundedCorners',
            'text-mask-margin': 2
        }, {
            'filter': "zoom=13;ref=~'^((?!;).)*$';highway='motorway,trunk,primary'",
            'text-name': '@shield_name',
            'text-fill': '@shield_fill',
            'text-halo-fill': '@baseland_text_halo_fill',
            'text-halo-radius': '@radius',
            'text-max-char-angle': 0,
            'text-spacing': 120,
            'text-mask-type': 'RoundedCorners',
            'text-mask-outline-color': '#999999',
            'text-force-horizontal-for-line': true,
            'text-mask-margin': 2,
            'text-dy': -0.7,
            'style': [{
                'filter': "highway='motorway,trunk'",
                'text-mask-color': '#f9d7a7',
                'text-mask-outline-width': 2,
                'text-font': 'bold 8px sans-serif'
            }, {
                'filter': "highway='primary'",
                'text-mask-outline-width': 2,
                'text-mask-color': '#fff7d5',
                'text-font': 'bold 8px sans-serif'
            }]
        }],
        'filter': "layerName='osm_road_linestring'"
    }, {
        'id': 'osm_road_linestring_z14-19_tunnel_style',
        'filter': "tunnel='yes';layer='-1,-2,-3,-4,-5';layerName='osm_road_linestring'",
        'z-index': 'layer',
        'style': [{
            'filter': 'zoom=14',
            'line-cap': '@line_cap',
            'line-color': '@tunnel_inner1',
            'style': [{
                'filter': "highway='motorway,trunk'",
                'line-width': 10,
                'style': [{
                    'filter': "highway='motorway'",
                    'children': [{
                        'line-color': '@motorway_inner',
                        'line-width': 8
                    }]
                }, {
                    'filter': "highway='trunk'",
                    'children': [{
                        'line-color': '@trunk_inner',
                        'line-width': 8
                    }]
                }]
            }, {
                'filter': "highway='primary'",
                'line-width': 8,
                'style': [{
                    'line-color': '@primary_inner',
                    'line-width': 6
                }]
            }, {
                'filter': "highway='secondary,tertiary,motorway_link,trunk_link,primary_link,secondary_link,tertiary_link'",
                'line-width': 6,
                'style': [{
                    'filter': "highway='secondary'",
                    'children': [{
                        'line-width': 4,
                        'line-color': '@secondary_inner'
                    }]
                }, {
                    'filter': "highway='tertiary'",
                    'children': [{
                        'line-width': 4,
                        'line-color': '@tertiary_inner'
                    }]
                }, {
                    'filter': "highway='motorway_link'",
                    'children': [{
                        'line-width': 4,
                        'line-color': '@motorway_link_inner'
                    }]
                }, {
                    'filter': "highway='primary_link'",
                    'children': [{
                        'line-width': 4,
                        'line-color': '@primary_inner'
                    }]
                }, {
                    'filter': "highway='secondary_link'",
                    'children': [{
                        'line-width': 4,
                        'line-color': '@secondary_link_inner'
                    }]
                }, {
                    'filter': "highway='tertiary_link'",
                    'children': [{
                        'line-width': 4,
                        'line-color': '@tertiary_link_inner'
                    }]
                }]
            }, {
                'filter': "highway='residential,unclassified,road'",
                'line-width': 5,
                'style': [{
                    'filter': "highway='residential'",
                    'children': [{
                        'line-width': 3,
                        'line-color': '@residential_inner'
                    }]
                }, {
                    'filter': "highway='unclassified'",
                    'children': [{
                        'line-width': 3,
                        'line-color': '@unclassified_inner'
                    }]
                }, {
                    'filter': "highway='road'",
                    'children': [{
                        'line-width': 3,
                        'line-color': '@road_inner'
                    }]
                }]
            }, {
                'filter': "highway='living_street'",
                'children': [{
                    'line-width': 3,
                    'line-color': '@living_street_inner'
                }]
            }]
        }, {
            'filter': 'zoom=15',
            'style': [{
                'filter': "highway='motorway,trunk'",
                'line-width': 10,
                'style': [{
                    'filter': "highway='motorway'",
                    'children': [{
                        'line-width': 8,
                        'line-color': '@motorway_inner'
                    }]
                }, {
                    'filter': "highway='trunk'",
                    'children': [{
                        'line-width': 8,
                        'line-color': '@trunk_inner'
                    }]
                }]
            }, {
                'filter': "highway='primary,tertiary,motorway_link,trunk_link,primary_link,secondary_link,tertiary_link'",
                'line-width': 8,
                'style': [{
                    'filter': "highway='primary'",
                    'children': [{
                        'line-width': 6,
                        'line-color': '@primary_inner'
                    }]
                }, {
                    'filter': "highway='tertiary'",
                    'children': [{
                        'line-width': 6,
                        'line-color': '@tertiary_inner'
                    }]
                }, {
                    'filter': "highway='primary_link'",
                    'children': [{
                        'line-width': 6,
                        'line-color': '@secondary_link_inner'
                    }]
                }, {
                    'filter': "highway='tertiary_link'",
                    'children': [{
                        'line-width': 6,
                        'line-color': '@primary_inner'
                    }]
                }]
            }, {
                'filter': "highway='residential,unclassified,road'",
                'line-width': 6,
                'style': [{
                    'filter': "highway='residential'",
                    'children': [{
                        'line-width': 4,
                        'line-color': '@residential_inner'
                    }]
                }, {
                    'filter': "highway='unclassified'",
                    'children': [{
                        'line-width': 4,
                        'line-color': '@unclassified_inner'
                    }]
                }, {
                    'filter': "highway='road'",
                    'children': [{
                        'line-width': 4,
                        'line-color': '@road_inner'
                    }]
                }]
            }, {
                'filter': "highway='secondary'",
                'children': [{
                    'line-width': 6,
                    'line-color': '@secondary_inner'
                }]
            }, {
                'filter': "highway='service,pedestrian'",
                'children': [{
                    'line-width': 3,
                    'line-color': '#f7f7f7'
                }]
            }, {
                'filter': "highway='cycleway,footway,bridleway,path,steps,track'",
                'children': [{
                    'line-width': 3,
                    'line-color': '#e7e6e5'
                }]
            }]
        }, {
            'filter': 'zoom=16',
            'line-cap': '@line_cap',
            'line-color': '@tunnel_outer1',
            'style': [{
                'filter': "highway='motorway,trunk,primary'",
                'line-width': 12,
                'style': [{
                    'filter': "highway='motorway'",
                    'children': [{
                        'line-width': 10,
                        'line-color': '@motorway_inner'
                    }]
                }, {
                    'filter': "highway='trunk'",
                    'children': [{
                        'line-width': 10,
                        'line-color': '@trunk_inner'
                    }]
                }, {
                    'filter': "highway='primary'",
                    'children': [{
                        'line-width': 10,
                        'line-color': '@primary_inner'
                    }]
                }]
            }, {
                'filter': "highway='secondary,tertiary,motorway_link,trunk_link,primary_link,secondary_link,tertiary_link'",
                'line-width': 10,
                'style': [{
                    'filter': "highway='secondary'",
                    'children': [{
                        'line-width': 8,
                        'line-color': '@secondary_inner'
                    }]
                }, {
                    'filter': "highway='tertiary'",
                    'children': [{
                        'line-width': 8,
                        'line-color': '@tertiary_inner'
                    }]
                }, {
                    'filter': "highway='motorway_link'",
                    'children': [{
                        'line-width': 8,
                        'line-color': '#F7DDB9'
                    }]
                }, {
                    'filter': "highway='trunk_link'",
                    'children': [{
                        'line-width': 8,
                        'line-color': '#FAF2E1'
                    }]
                }, {
                    'filter': "highway='primary_link'",
                    'children': [{
                        'line-width': 8,
                        'line-color': '@primary_inner'
                    }]
                }, {
                    'filter': "highway='secondary_link'",
                    'children': [{
                        'line-width': 8,
                        'line-color': '@secondary_link_inner'
                    }]
                }, {
                    'filter': "highway='tertiary_link'",
                    'children': [{
                        'line-width': 8,
                        'line-color': '@tertiary_link_inner'
                    }]
                }]
            }, {
                'filter': "highway='residential,unclassified,road'",
                'line-width': 8,
                'style': [{
                    'filter': "highway='residential'",
                    'children': [{
                        'line-width': 6,
                        'line-color': '@residential_inner'
                    }]
                }, {
                    'filter': "highway='unclassified'",
                    'children': [{
                        'line-width': 6,
                        'line-color': '@unclassified_inner'
                    }]
                }, {
                    'filter': "highway='road'",
                    'children': [{
                        'line-width': 6,
                        'line-color': '@road_inner'
                    }]
                }]
            }, {
                'filter': "highway='living_street,service,pedestrian'",
                'style': [{
                    'filter': "highway='living_street'",
                    'children': [{
                        'line-width': 4,
                        'line-color': '@living_street_inner'
                    }]
                }, {
                    'filter': "highway='service'",
                    'children': [{
                        'line-width': 4,
                        'line-color': '@service_inner'
                    }]
                }, {
                    'filter': "highway='pedestrian'",
                    'children': [{
                        'line-width': 4,
                        'line-color': '#F0EFEE'
                    }]
                }]
            }, {
                'filter': "highway='cycleway,footway,bridleway,path,steps,track'",
                'children': [{
                    'line-width': 3,
                    'line-color': '#F0EFEE'
                }]
            }]
        }, {
            'filter': 'zoom=17',
            'line-cap': '@line_cap',
            'line-color': '@tunnel_outer1',
            'style': [{
                'filter': "highway='motorway,trunk,primary",
                'line-width': 14,
                'style': [{
                    'filter': "highway='motorway'",
                    'children': [{
                        'line-width': 12,
                        'line-color': '@motorway_inner'
                    }]
                }, {
                    'filter': "highway='trunk'",
                    'children': [{
                        'line-width': 12,
                        'line-color': '@trunk_inner'
                    }]
                }, {
                    'filter': "highway='primary'",
                    'children': [{
                        'line-width': 12,
                        'line-color': '@primary_inner'
                    }]
                }]
            }, {
                'filter': "highway='secondary,motorway_link,trunk_link,primary_link,secondary_link'",
                'line-width': 12,
                'style': [{
                    'filter': "highway='secondary'",
                    'children': [{
                        'line-width': 10,
                        'line-color': '@secondary_inner'
                    }]
                }, {
                    'filter': "highway='motorway_link'",
                    'children': [{
                        'line-width': 10,
                        'line-color': '#F7DDB9'
                    }]
                }, {
                    'filter': "highway='trunk_link'",
                    'children': [{
                        'line-width': 10,
                        'line-color': '#FAF2E1'
                    }]
                }, {
                    'filter': "highway='primary_link'",
                    'children': [{
                        'line-width': 10,
                        'line-color': '@secondary_link_inner'
                    }]
                }, {
                    'filter': "highway='secondary_link'",
                    'children': [{
                        'line-width': 10,
                        'line-color': '@secondary_link_inner'
                    }]
                }]
            }, {
                'filter': "highway='tertiary_link,residential,unclassified,road'",
                'line-width': 10,
                'style': [{
                    'filter': "highway='tertiary_link'",
                    'children': [{
                        'line-width': 8,
                        'line-color': '@tertiary_link_inner'
                    }]
                }, {
                    'filter': "highway='residential'",
                    'children': [{
                        'line-width': 8,
                        'line-color': '@residential_inner'
                    }]
                }, {
                    'filter': "highway='unclassified'",
                    'children': [{
                        'line-width': 8,
                        'line-color': '@unclassified_inner'
                    }]
                }, {
                    'filter': "highway='road'",
                    'children': [{
                        'line-width': 8,
                        'line-color': '@road_inner'
                    }]
                }]
            }, {
                'filter': "highway='tertiary'",
                'children': [{
                    'line-width': 8,
                    'line-color': '@tertiary_inner'
                }]
            }, {
                'filter': "highway='living_street'",
                'children': [{
                    'line-width': 6,
                    'line-color': '@living_street_inner'
                }]
            }, {
                'filter': "highway='service'",
                'children': [{
                    'line-width': 6,
                    'line-color': '@service_inner'
                }]
            }]
        }, {
            'filter': 'zoom>=18;zoom<=19',
            'line-cap': '@line_cap',
            'line-color': '@tunnel_outer1',
            'style': [{
                'filter': "highway='motorway,trunk,primary'",
                'line-width': 16,
                'style': [{
                    'filter': "highway='motorway'",
                    'children': [{
                        'line-width': 14,
                        'line-color': '@motorway_inner'
                    }]
                }, {
                    'filter': "highway='trunk'",
                    'children': [{
                        'line-width': 14,
                        'line-color': '@trunk_inner'
                    }]
                }, {
                    'filter': "highway='primary'",
                    'children': [{
                        'line-width': 14,
                        'line-color': '@primary_inner'
                    }]
                }]
            }, {
                'filter': "highway='secondary,motorway_link,trunk_link,primary_link,secondary_link'",
                'line-width': 14,
                'style': [{
                    'filter': "highway='secondary'",
                    'children': [{
                        'line-width': 12,
                        'line-color': '@secondary_inner'
                    }]
                }, {
                    'filter': "highway='motorway_link'",
                    'children': [{
                        'line-width': 12,
                        'line-color': '#F7DDB9'
                    }]
                }, {
                    'filter': "highway='trunk_link'",
                    'children': [{
                        'line-width': 12,
                        'line-color': '#FAF2E1'
                    }]
                }, {
                    'filter': "highway='primary_link'",
                    'children': [{
                        'line-width': 12,
                        'line-color': '@primary_inner'
                    }]
                }, {
                    'filter': "highway='secondary_link'",
                    'children': [{
                        'line-width': 12,
                        'line-color': '@secondary_link_inner'
                    }]
                }]
            }, {
                'filter': "highway='tertiary,tertiary_link,residential,unclassified,road'",
                'line-width': 12,
                'style': [{
                    'filter': "highway='tertiary'",
                    'children': [{
                        'line-width': 10,
                        'line-color': '@tertiary_inner'
                    }]
                }, {
                    'filter': "highway='tertiary_link'",
                    'children': [{
                        'line-width': 10,
                        'line-color': '@tertiary_link_inner'
                    }]
                }, {
                    'filter': "highway='residential'",
                    'children': [{
                        'line-width': 10,
                        'line-color': '@residential_inner'
                    }]
                }, {
                    'filter': "highway='unclassified'",
                    'children': [{
                        'line-width': 10,
                        'line-color': '@unclassified_inner'
                    }]
                }, {
                    'filter': "highway='road'",
                    'children': [{
                        'line-width': 10,
                        'line-color': '@road_inner'
                    }]
                }]
            }, {
                'filter': "highway='living_street'",
                'children': [{
                    'line-width': 8,
                    'line-color': '@living_street_inner'
                }]
            }, {
                'filter': "highway='service'",
                'children': [{
                    'line-width': 8,
                    'line-color': '@service_inner'
                }]
            }, {
                'filter': "highway='pedestrian,cycleway,footway,bridleway,path,steps,track'",
                'children': [{
                    'line-width': 4,
                    'line-color': '#F0EFEE'
                }]
            }]
        }]
    }, {
        'id': 'osm_road_linestring_label_z14-19_shield_style',
        'style': [{
            'filter': "zoom=14;ref=~'^((?!;).)*$'",
            'text-name': '@shield_name',
            'text-fill': '@shield_fill',
            'text-halo-fill': '@baseland_text_halo_fill',
            'text-halo-radius': '@radius',
            'text-max-char-angle': 0,
            'text-spacing': 150,
            'text-mask-type': 'RoundedCorners',
            'text-mask-outline-color': '#999999',
            'text-force-horizontal-for-line': true,
            'text-mask-margin': 2,
            'text-dy': -0.7,
            'style': [{
                'filter': "highway='motorway,trunk'",
                'text-mask-color': '#f9d7a7',
                'text-mask-outline-width': 2,
                'text-font': 'bold 9px sans-serif'
            }, {
                'filter': "highway='primary'",
                'text-mask-outline-width': 2,
                'text-mask-color': '#fff7d5',
                'text-font': 'bold 9px sans-serif'
            }]
        }, {
            'filter': "zoom=15;ref=~'^((?!;).)*$'",
            'text-name': '@shield_name',
            'text-fill': '@shield_fill',
            'text-halo-fill': '@baseland_text_halo_fill',
            'text-halo-radius': '@radius',
            'text-force-horizontal-for-line': true,
            'text-max-char-angle': 0,
            'text-spacing': 100,
            'text-dy': -0.5,
            'text-mask-color': '#f9d7a7',
            'text-mask-outline-color': '#999999',
            'text-mask-outline-width': 2,
            'text-mask-type': 'RoundedCorners',
            'text-mask-margin': 2,
            'style': [{
                'filter': "highway='motorway,trunk,primary'",
                'text-font': 'bold 10px sans-serif'
            }, {
                'filter': "highway='secondary,tertiary'",
                'text-font': 'bold 9px sans-serif'
            }, {
                'filter': "highway='residential,unclassified,road,living_street'",
                'text-font': 'bold 8px sans-serif'
            }]
        }, {
            'filter': "zoom=16;ref=~'^((?!;).)*$'",
            'text-name': '@shield_name',
            'text-fill': '@shield_fill',
            'text-halo-fill': '@baseland_text_halo_fill',
            'text-halo-radius': '@radius',
            'text-force-horizontal-for-line': true,
            'text-max-char-angle': 0,
            'text-spacing': 100,
            'text-dy': -0.5,
            'text-mask-color': '#f8d39d',
            'text-mask-outline-color': '#999999',
            'text-mask-outline-width': 2,
            'text-mask-type': 'RoundedCorners',
            'text-mask-margin': 2,
            'style': [{
                'filter': "highway='motorway,trunk,primary'",
                'text-font': 'bold 11px sans-serif'
            }, {
                'filter': "highway='secondary,tertiary'",
                'text-font': 'bold 10px sans-serif'
            }, {
                'filter': "highway='residential,unclassified,road,living_street'",
                'text-font': 'bold 9px sans-serif'
            }]
        }, {
            'filter': "zoom=17;ref=~'^((?!;).)*$'",
            'text-name': '@shield_name',
            'text-fill': '@shield_fill',
            'text-halo-fill': '@baseland_text_halo_fill',
            'text-halo-radius': '@radius',
            'text-force-horizontal-for-line': true,
            'text-max-char-angle': 0,
            'text-spacing': 20,
            'text-dy': -0.5,
            'text-mask-outline-color': '#999999',
            'text-mask-outline-width': 2,
            'text-mask-type': 'RoundedCorners',
            'text-mask-margin': 2,
            'style': [{
                'filter': "highway='motorway,trunk'",
                'text-mask-color': '#f9d7a7',
                'text-font': 'bold 11px sans-serif'
            }, {
                'filter': "highway='primary'",
                'text-mask-color': '#fff6cf',
                'text-font': 'bold 11px sans-serif'
            }]
        }, {
            'filter': "zoom>=18;zoom<=19;ref=~'^((?!;).)*$'",
            'text-name': '@shield_name',
            'text-fill': '@shield_fill',
            'text-halo-fill': '@baseland_text_halo_fill',
            'text-halo-radius': '@radius',
            'text-force-horizontal-for-line': true,
            'text-max-char-angle': 0,
            'text-spacing': 20,
            'text-dy': -0.5,
            'text-mask-outline-color': '#999999',
            'text-mask-outline-width': 2,
            'text-mask-type': 'RoundedCorners',
            'text-mask-margin': 2,
            'style': [{
                'filter': "highway='motorway,trunk'",
                'text-mask-color': '#f9d7a7',
                'text-font': 'bold 13px sans-serif'
            }, {
                'filter': "highway='primary'",
                'text-mask-color': '#fff7d5',
                'text-font': 'bold 13px sans-serif'
            }]
        }],
        'filter': "layerName='osm_road_linestring'"
    }, {
        'id': 'osm_road_linestring_z14-19_line_style',
        'style-first': true,
        'style': [{
            'filter': 'zoom=14',
            'style': [{
                'filter': "highway='road,residential,unclassified'",
                'line-width': 3,
                'style': [{
                    'filter': "highway='road'",
                    'line-color': '@road_outer',
                    'children': [{
                        'line-width': 2,
                        'line-color': '@residential_inner'
                    }]
                }, {
                    'filter': "highway='residential'",
                    'line-color': '@residential_outer',
                    'children': [{
                        'line-width': 2,
                        'line-color': '@residential_inner'
                    }]
                }, {
                    'filter': "highway='unclassified'",
                    'line-color': '@unclassified_outer',
                    'children': [{
                        'line-width': 2,
                        'line-color': '@unclassified_inner'
                    }]
                }]
            }, {
                'filter': "highway='living_street'",
                'line-color': '@living_street_outer',
                'line-width': 2,
                'children': [{
                    'line-width': 2,
                    'line-color': '@living_street_inner'
                }]
            }, {
                'filter': "highway='service'",
                'line-color': '@service_outer',
                'line-width': 1,
                'children': [{
                    'line-width': 1,
                    'line-color': '@service_inner'
                }]
            }, {
                'filter': "highway='primary'",
                'line-color': '@primary_outer',
                'line-width': 6,
                'children': [{
                    'line-color': '@primary_inner',
                    'line-width': 4
                }]
            }, {
                'filter': "highway='trunk'",
                'line-color': '@trunk_outer',
                'line-width': 8,
                'children': [{
                    'line-color': '@trunk_inner',
                    'line-width': 6
                }]
            }, {
                'filter': "highway='motorway'",
                'line-color': '@motorway_outer',
                'line-width': 8,
                'children': [{
                    'line-color': '@motorway_inner',
                    'line-width': 6
                }]
            }, {
                'filter': "highway='tertiary_link,tertiary,secondary_link,secondary,primary_link,trunk_link,motorway_link'",
                'line-width': 4,
                'style': [{
                    'filter': "highway='tertiary_link'",
                    'line-color': '@tertiary_link_outer',
                    'children': [{
                        'line-width': 2,
                        'line-color': '@tertiary_link_inner'
                    }]
                }, {
                    'filter': "highway='tertiary'",
                    'line-color': '@tertiary_outer',
                    'children': [{
                        'line-width': 2,
                        'line-color': '@tertiary_link_inner'
                    }]
                }, {
                    'filter': "highway='secondary_link'",
                    'line-color': '@secondary_link_outer',
                    'children': [{
                        'line-width': 2,
                        'line-color': '@secondary_link_inner'
                    }]
                }, {
                    'filter': "highway='secondary'",
                    'line-color': '@secondary_outer',
                    'children': [{
                        'line-width': 2,
                        'line-color': '@secondary_link_inner'
                    }]
                }, {
                    'filter': "highway='primary_link'",
                    'line-color': '@primary_link_outer',
                    'children': [{
                        'line-width': 2,
                        'line-color': '@primary_link_inner'
                    }]
                }, {
                    'filter': "highway='trunk_link'",
                    'line-color': '@trunk_link_outer',
                    'children': [{
                        'line-width': 2,
                        'line-color': '@trunk_link_inner'
                    }]
                }, {
                    'filter': "highway='motorway_link'",
                    'line-color': '#e1bb7e',
                    'children': [{
                        'line-width': 2,
                        'line-color': '#F7DDB9'
                    }]
                }]
            }]
        }, {
            'filter': 'zoom=15',
            'line-cap': 'butt',
            'style': [{
                'filter': "highway='motorway,trunk'",
                'line-width': 8,
                'style': [{
                    'filter': "highway='motorway'",
                    'line-color': '@motorway_outer',
                    'children': [{
                        'line-width': 6,
                        'line-color': '@motorway_inner'
                    }]
                }, {
                    'filter': "highway='trunk'",
                    'line-color': '@trunk_outer',
                    'children': [{
                        'line-width': 6,
                        'line-color': '@trunk_inner'
                    }]
                }]
            }, {
                'filter': "highway='primary,secondary,tertiary,motorway_link,trunk_link,primary_link'",
                'line-width': 6,
                'style': [{
                    'filter': "highway='primary'",
                    'line-color': '#CCCCCC',
                    'children': [{
                        'line-width': 4,
                        'line-color': '@primary_inner'
                    }]
                }, {
                    'filter': "highway='secondary'",
                    'line-color': '@secondary_outer',
                    'children': [{
                        'line-width': 4,
                        'line-color': '@secondary_inner'
                    }]
                }, {
                    'filter': "highway='tertiary'",
                    'line-color': '@tertiary_outer',
                    'children': [{
                        'line-width': 4,
                        'line-color': '@tertiary_inner'
                    }]
                }, {
                    'filter': "highway='motorway_link'",
                    'line-color': '@motorway_link_outer',
                    'children': [{
                        'line-width': 4,
                        'line-color': '#F7DDB9'
                    }]
                }, {
                    'filter': "highway='trunk_link'",
                    'line-color': '#E2D0AC',
                    'children': [{
                        'line-width': 4,
                        'line-color': '#FAF2E1'
                    }]
                }, {
                    'filter': "highway='primary_link'",
                    'line-color': '#CCCCCC',
                    'children': [{
                        'line-width': 4,
                        'line-color': '@primary_inner'
                    }]
                }]
            }, {
                'filter': "highway='secondary_link,tertiary_link,residential,unclassified,road,living_street'",
                'line-width': 4,
                'style': [{
                    'filter': "highway='secondary_link'",
                    'line-color': '@secondary_link_outer',
                    'children': [{
                        'line-width': 1,
                        'line-color': '#F0EFEE'
                    }]
                }, {
                    'filter': "highway='tertiary_link'",
                    'line-color': '@tertiary_link_outer',
                    'children': [{
                        'line-width': 1,
                        'line-color': '#F0EFEE'
                    }]
                }, {
                    'filter': "highway='residential'",
                    'line-color': '@residential_outer',
                    'children': [{
                        'line-width': 2,
                        'line-color': '@residential_inner'
                    }]
                }, {
                    'filter': "highway='unclassified'",
                    'line-color': '@unclassified_outer',
                    'children': [{
                        'line-width': 2,
                        'line-color': '@unclassified_inner'
                    }]
                }, {
                    'filter': "highway='road'",
                    'line-color': '@road_outer',
                    'children': [{
                        'line-width': 2,
                        'line-color': '@road_inner'
                    }]
                }, {
                    'filter': "highway='living_street'",
                    'line-color': '@living_street_outer',
                    'children': [{
                        'line-width': 2,
                        'line-color': '@living_street_inner'
                    }]
                }]
            }, {
                'filter': "highway='service,pedestrian'",
                'line-width': 3,
                'style': [{
                    'filter': "highway='service'",
                    'line-color': '#e0e0e0',
                    'children': [{
                        'line-width': 1,
                        'line-color': '@service_inner'
                    }]
                }, {
                    'filter': "highway='pedestrian'",
                    'line-color': '#CCCCCC',
                    'children': [{
                        'line-width': 1,
                        'line-color': '@pedestrian_inner'
                    }]
                }]
            }, {
                'filter': "highway='footway'",
                'line-width': 3,
                'line-color': '#cccccc',
                'line-dasharray': '5,2',
                'line-width-inner': 1,
                'line-color-inner': '#ffffff'
            }, {
                'filter': "highway='cycleway,bridleway,path,steps,track'",
                'line-width': 2,
                'line-color': '#CCCCCC',
                'children': [{
                    'line-width': 1,
                    'line-color': '#F0EFEE'
                }]
            }]
        }, {
            'filter': 'zoom=16',
            'line-cap': 'butt',
            'style': [{
                'filter': "highway='motorway,trunk,primary'",
                'line-width': 10,
                'style': [{
                    'filter': "highway='motorway'",
                    'line-color': '@motorway_outer',
                    'children': [{
                        'line-width': 8,
                        'line-color': '@motorway_inner'
                    }]
                }, {
                    'filter': "highway='trunk'",
                    'line-color': '@trunk_outer',
                    'children': [{
                        'line-width': 8,
                        'line-color': '@trunk_inner'
                    }]
                }, {
                    'filter': "highway='primary'",
                    'line-color': '#CCCCCC',
                    'children': [{
                        'line-width': 8,
                        'line-color': '@primary_inner'
                    }]
                }]
            }, {
                'filter': "highway='secondary,tertiary,motorway_link,trunk_link,primary_link,secondary_link,tertiary_link'",
                'line-width': 8,
                'style': [{
                    'filter': "highway='secondary'",
                    'line-color': '@secondary_outer',
                    'children': [{
                        'line-width': 6,
                        'line-color': '@secondary_inner'
                    }]
                }, {
                    'filter': "highway='tertiary'",
                    'line-color': '@tertiary_outer',
                    'children': [{
                        'line-width': 6,
                        'line-color': '@tertiary_inner'
                    }]
                }, {
                    'filter': "highway='motorway_link'",
                    'line-color': '@motorway_link_outer',
                    'children': [{
                        'line-width': 6,
                        'line-color': '#F7DDB9'
                    }]
                }, {
                    'filter': "highway='trunk_link'",
                    'line-color': '#E2D0AC',
                    'children': [{
                        'line-width': 6,
                        'line-color': '#FAF2E1'
                    }]
                }, {
                    'filter': "highway='primary_link'",
                    'line-color': '#CCCCCC',
                    'children': [{
                        'line-width': 6,
                        'line-color': '@primary_inner'
                    }]
                }, {
                    'filter': "highway='secondary_link'",
                    'line-color': '@secondary_link_outer',
                    'children': [{
                        'line-width': 6,
                        'line-color': '@secondary_link_inner'
                    }]
                }, {
                    'filter': "highway='tertiary_link'",
                    'line-color': '@tertiary_link_outer',
                    'children': [{
                        'line-width': 6,
                        'line-color': '@tertiary_link_inner'
                    }]
                }]
            }, {
                'filter': "highway='residential,unclassified,road'",
                'line-width': 6,
                'style': [{
                    'filter': "highway='residential'",
                    'line-color': '@residential_outer',
                    'children': [{
                        'line-width': 4,
                        'line-color': '@residential_inner'
                    }]
                }, {
                    'filter': "highway='unclassified'",
                    'line-color': '@unclassified_outer',
                    'children': [{
                        'line-width': 4,
                        'line-color': '@unclassified_inner'
                    }]
                }, {
                    'filter': "highway='road'",
                    'line-color': '@road_outer',
                    'children': [{
                        'line-width': 4,
                        'line-color': '@road_inner'
                    }]
                }]
            }, {
                'filter': "highway='living_street,service,pedestrian'",
                'line-width': 4,
                'style': [{
                    'filter': "highway='living_street'",
                    'line-color': '@living_street_outer',
                    'children': [{
                        'line-width': 2,
                        'line-color': '#F0EFEE'
                    }]
                }, {
                    'filter': "highway='service'",
                    'line-color': '#e0e0e0',
                    'children': [{
                        'line-width': 2,
                        'line-color': '@service_inner'
                    }]
                }, {
                    'filter': "highway='pedestrian'",
                    'line-width': 3,
                    'line-color': '#CCCCCC',
                    'children': [{
                        'line-width': 2,
                        'line-color': '#F0EFEE'
                    }]
                }]
            }, {
                'filter': "highway='footway'",
                'line-width': 3,
                'line-color': '#cccccc',
                'line-dasharray': '5,2',
                'line-width-inner': 1,
                'line-color-inner': '#ffffff'
            }, {
                'filter': "highway='cycleway,bridleway,path,steps,track'",
                'line-width': 2,
                'line-color': '#CCCCCC',
                'children': [{
                    'line-width': 1,
                    'line-color': '#F0EFEE'
                }]
            }]
        }, {
            'filter': 'zoom=17',
            'line-cap': 'butt',
            'style': [{
                'filter': "highway='motorway,trunk,primary'",
                'line-width': 12,
                'style': [{
                    'filter': "highway='motorway'",
                    'line-color': '@motorway_outer',
                    'children': [{
                        'line-width': 10,
                        'line-color': '@motorway_inner'
                    }]
                }, {
                    'filter': "highway='trunk'",
                    'line-color': '@trunk_outer',
                    'children': [{
                        'line-width': 10,
                        'line-color': '@trunk_inner'
                    }]
                }, {
                    'filter': "highway='primary'",
                    'line-color': '#CCCCCC',
                    'children': [{
                        'line-width': 10,
                        'line-color': '@primary_inner'
                    }]
                }]
            }, {
                'filter': "highway='secondary,motorway_link,trunk_link,primary_link'",
                'line-width': 10,
                'style': [{
                    'filter': "highway='secondary'",
                    'line-color': '@secondary_outer',
                    'children': [{
                        'line-width': 8,
                        'line-color': '@secondary_inner'
                    }]
                }, {
                    'filter': "highway='motorway_link'",
                    'line-color': '@motorway_link_outer',
                    'children': [{
                        'line-width': 8,
                        'line-color': '#F7DDB9'
                    }]
                }, {
                    'filter': "highway='trunk_link'",
                    'line-color': '#E2D0AC',
                    'children': [{
                        'line-width': 8,
                        'line-color': '#FAF2E1'
                    }]
                }, {
                    'filter': "highway='primary_link'",
                    'line-color': '#CCCCCC',
                    'children': [{
                        'line-width': 8,
                        'line-color': '@primary_inner'
                    }]
                }]
            }, {
                'filter': "highway='tertiary,secondary_link,tertiary_link,residential,unclassified,road'",
                'line-width': 8,
                'style': [{
                    'filter': "highway='tertiary'",
                    'line-width': 8,
                    'line-color': '@tertiary_outer',
                    'children': [{
                        'line-width': 6,
                        'line-color': '@tertiary_link_inner'
                    }]
                }, {
                    'filter': "highway='secondary_link'",
                    'line-color': '@secondary_link_outer',
                    'children': [{
                        'line-width': 6,
                        'line-color': '@secondary_link_inner'
                    }]
                }, {
                    'filter': "highway='tertiary_link'",
                    'line-color': '@tertiary_link_outer',
                    'children': [{
                        'line-width': 6,
                        'line-color': '@tertiary_link_inner'
                    }]
                }, {
                    'filter': "highway='residential'",
                    'line-color': '@residential_outer',
                    'children': [{
                        'line-width': 6,
                        'line-color': '@residential_inner'
                    }]
                }, {
                    'filter': "highway='unclassified'",
                    'line-color': '@unclassified_outer',
                    'children': [{
                        'line-width': 6,
                        'line-color': '@unclassified_inner'
                    }]
                }, {
                    'filter': "highway='road'",
                    'line-color': '@road_outer',
                    'children': [{
                        'line-width': 6,
                        'line-color': '@road_inner'
                    }]
                }]
            }, {
                'filter': "highway='living_street,service'",
                'line-width': 6,
                'style': [{
                    'filter': "highway='living_street'",
                    'line-color': '@living_street_outer',
                    'children': [{
                        'line-width': 4,
                        'line-color': '#F0EFEE'
                    }]
                }, {
                    'filter': "highway='service'",
                    'line-color': '#e0e0e0',
                    'children': [{
                        'line-width': 4,
                        'line-color': '@service_inner'
                    }]
                }]
            }, {
                'filter': "highway='footway'",
                'line-width': 4,
                'line-color': '#cccccc',
                'line-dasharray': '5,2',
                'line-width-inner': 1,
                'line-color-inner': '#ffffff'
            }, {
                'filter': "highway='pedestrian,cycleway,bridleway,path,steps,track'",
                'line-width': 4,
                'line-color': '#CCCCCC',
                'children': [{
                    'line-width': 2,
                    'line-color': '#ffffff'
                }]
            }]
        }, {
            'filter': 'zoom>=18;zoom<=19',
            'line-cap': 'butt',
            'style': [{
                'filter': "highway='motorway,trunk,primary'",
                'line-width': 14,
                'style': [{
                    'filter': "highway='motorway'",
                    'line-color': '@motorway_outer',
                    'children': [{
                        'line-width': 12,
                        'line-color': '@motorway_inner'
                    }]
                }, {
                    'filter': "highway='trunk'",
                    'line-color': '@trunk_outer',
                    'children': [{
                        'line-width': 12,
                        'line-color': '@trunk_inner'
                    }]
                }, {
                    'filter': "highway='primary'",
                    'line-color': '#CCCCCC',
                    'children': [{
                        'line-width': 12,
                        'line-color': '@primary_inner'
                    }]
                }]
            }, {
                'filter': "highway='secondary,motorway_link,trunk_link,primary_link'",
                'line-width': 12,
                'style': [{
                    'filter': "highway='secondary'",
                    'line-color': '@secondary_outer',
                    'children': [{
                        'line-width': 10,
                        'line-color': '@secondary_inner'
                    }]
                }, {
                    'filter': "highway='motorway_link'",
                    'line-color': '@motorway_link_outer',
                    'children': [{
                        'line-width': 10,
                        'line-color': '#F7DDB9'
                    }]
                }, {
                    'filter': "highway='trunk_link'",
                    'line-color': '#E2D0AC',
                    'children': [{
                        'line-width': 10,
                        'line-color': '#FAF2E1'
                    }]
                }, {
                    'filter': "highway='primary_link'",
                    'line-color': '#CCCCCC',
                    'children': [{
                        'line-width': 10,
                        'line-color': '@primary_inner'
                    }]
                }]
            }, {
                'filter': "highway='secondary_link,tertiary_link'",
                'line-color': '@tertiary_link_outer',
                'line-width': 9,
                'children': [{
                    'line-width': 8,
                    'line-color': '@tertiary_link_inner'
                }]
            }, {
                'filter': "highway='residential,unclassified,road'",
                'line-width': 10,
                'line-color': '@residential_outer',
                'children': [{
                    'line-width': 8,
                    'line-color': '@unclassified_inner'
                }]
            }, {
                'filter': "highway='living_street,service,tertiary'",
                'line-width': 8,
                'style': [{
                    'filter': "highway='living_street'",
                    'line-color': '@living_street_outer',
                    'children': [{
                        'line-width': 6,
                        'line-color': '#F0EFEE'
                    }]
                }, {
                    'filter': "highway='service'",
                    'line-width': 8,
                    'line-color': '#e0e0e0',
                    'children': [{
                        'line-width': 7,
                        'line-color': '@service_inner'
                    }]
                }, {
                    'filter': "highway='tertiary'",
                    'line-color': '@tertiary_outer',
                    'children': [{
                        'line-width': 7,
                        'line-color': '@tertiary_inner'
                    }]
                }]
            }, {
                'filter': "highway='footway'",
                'line-width': 6,
                'line-color': '#cccccc',
                'line-dasharray': '5,2',
                'line-width-inner': 2,
                'line-color-inner': '#ffffff'
            }, {
                'filter': "highway='cycleway,bridleway,path,steps,track,pedestrian'",
                'line-width': 4,
                'line-color': '#CCCCCC',
                'children': [{
                    'line-width': 2,
                    'line-color': '#F0EFEE'
                }]
            }]
        }],
        'filter': "layerName='osm_road_linestring'"
    }, {
        'id': 'osm_road_linestring_z14-19_label_style',
        'style': [{
            'filter': 'zoom=14',
            'text-name': '@text_name',
            'text-fill': '#666',
            'text-halo-radius': 2,
            'text-halo-fill': '#fff',
            'text-max-char-angle': 0,
            'text-spacing': 60,
            'style': [{
                'filter': "highway='tertiary,secondary'",
                'text-font': '9px sans-serif'
            }, {
                'filter': "highway='motorway,trunk,primary'",
                'text-font': '11px sans-serif'
            }]
        }, {
            'filter': 'zoom>=15;zoom<=16',
            'text-name': '@text_name',
            'text-fill': '#666',
            'text-spline-type': 'ForceSplining',
            'text-placements': '@text_placements',
            'style': [{
                'filter': "highway='motorway,trunk'",
                'text-halo-radius': 2,
                'text-halo-fill': '#fff',
                'text-font': '13px sans-serif'
            }, {
                'filter': "highway='primary'",
                'text-halo-radius': 2,
                'text-halo-fill': '#fff',
                'text-font': '11px sans-serif'
            }, {
                'filter': "highway='secondary,tertiary,residential,unclassified,road'",
                'text-halo-radius': 2,
                'text-halo-fill': '#fff',
                'text-font': '9px sans-serif'
            }, {
                'filter': "highway='living_street'",
                'text-font': '9px sans-serif'
            }]
        }, {
            'filter': 'zoom=17',
            'text-name': '@text_name',
            'text-fill': '#666',
            'text-spline-type': 'ForceSplining',
            'text-placements': '@text_placements',
            'style': [{
                'filter': "highway='motorway,trunk,primary'",
                'text-halo-radius': 2,
                'text-halo-fill': '#fff',
                'text-font': '14px sans-serif'
            }, {
                'filter': "highway='secondary'",
                'text-halo-radius': 2,
                'text-halo-fill': '#fff',
                'text-font': '12px sans-serif'
            }, {
                'filter': "highway='tertiary,residential,unclassified,road'",
                'text-halo-radius': 2,
                'text-halo-fill': '#fff',
                'text-font': '10px sans-serif'
            }, {
                'filter': "highway='living_street'",
                'text-font': '10px sans-serif'
            }]
        }, {
            'filter': 'zoom>=18;zoom<=19',
            'text-name': '@text_name',
            'text-fill': '@baseland_text_fill',
            'text-spline-type': 'ForceSplining',
            'text-placements': '@text_placements',
            'style': [{
                'filter': "highway='motorway,trunk,primary'",
                'text-halo-fill': '@baseland_text_halo_fill',
                'text-halo-radius': '@radius',
                'text-font': '16px sans-serif'
            }, {
                'filter': "highway='secondary'",
                'text-halo-fill': '@baseland_text_halo_fill',
                'text-halo-radius': '@radius',
                'text-font': '14px sans-serif'
            }, {
                'filter': "highway='tertiary,residential,unclassified,road'",
                'text-halo-fill': '@baseland_text_halo_fill',
                'text-halo-radius': '@radius',
                'text-font': '12px sans-serif'
            }, {
                'filter': "highway='living_street'",
                'text-font': '10px sans-serif'
            }]
        }],
        'filter': "layerName='osm_road_linestring'"
    }, {
        'id': 'osm_road_linestring_z14-19_bridge_style',
        'filter': "bridge='yes';z_order='10,20,30,40,50';layerName='osm_road_linestring'",
        'z-index': 'layer',
        'style-first': true,
        'line-cap': 'butt',
        'style': [{
            'filter': 'zoom=14',
            'line-color': '@bridge_outer1',
            'style': [{
                'filter': "highway='motorway,trunk'",
                'line-width': 8,
                'style': [{
                    'filter': "highway='motorway",
                    'children': [{
                        'line-color': '@motorway_inner',
                        'line-width': 6
                    }]
                }, {
                    'filter': "highway='trunk",
                    'children': [{
                        'line-color': '@trunk_inner',
                        'line-width': 6
                    }]
                }]
            }, {
                'filter': "highway='primary'",
                'line-width': 6,
                'children': [{
                    'line-color': '@primary_inner',
                    'line-width': 4
                }]
            }, {
                'filter': "highway='secondary,tertiary,motorway_link,trunk_link,primary_link,secondary_link,tertiary_link'",
                'line-width': 4,
                'style': [{
                    'filter': "highway='secondary'",
                    'children': [{
                        'line-width': 2,
                        'line-color': '@secondary_inner'
                    }]
                }, {
                    'filter': "highway='tertiary'",
                    'children': [{
                        'line-width': 2,
                        'line-color': '@tertiary_inner'
                    }]
                }, {
                    'filter': "highway='motorway_link'",
                    'children': [{
                        'line-width': 2,
                        'line-color': '@motorway_link_inner'
                    }]
                }, {
                    'filter': "highway='trunk_link'",
                    'children': [{
                        'line-width': 2,
                        'line-color': 'rgb(250,242,225)'
                    }]
                }, {
                    'filter': "highway='primary_link'",
                    'children': [{
                        'line-width': 2,
                        'line-color': '@primary_inner'
                    }]
                }, {
                    'filter': "highway='secondary_link'",
                    'children': [{
                        'line-width': 2,
                        'line-color': '@secondary_link_inner'
                    }]
                }, {
                    'filter': "highway='tertiary_link'",
                    'children': [{
                        'line-width': 2,
                        'line-color': '@tertiary_link_inner'
                    }]
                }]
            }, {
                'filter': "highway='residential,unclassified'",
                'line-width': 3,
                'style': [{
                    'filter': "highway='residential'",
                    'children': [{
                        'line-width': 1,
                        'line-color': '@residential_inner'
                    }]
                }, {
                    'filter': "highway='unclassified'",
                    'children': [{
                        'line-width': 1,
                        'line-color': '@unclassified_inner'
                    }]
                }, {
                    'filter': "highway='road'",
                    'children': [{
                        'line-width': 1,
                        'line-color': '@road_inner'
                    }]
                }]
            }, {
                'filter': "highway='living_street'",
                'style': [{
                    'children': [{
                        'line-width': 1,
                        'line-color': '@living_street_inner'
                    }]
                }]
            }]
        }, {
            'filter': 'zoom=15',
            'line-color': '@bridge_outer2',
            'style': [{
                'filter': "highway='motorway,trunk'",
                'line-width': 8,
                'style': [{
                    'filter': "highway='motorway'",
                    'children': [{
                        'line-width': 6,
                        'line-color': '@motorway_inner'
                    }]
                }, {
                    'filter': "highway='trunk'",
                    'children': [{
                        'line-width': 6,
                        'line-color': '@trunk_inner'
                    }]
                }]
            }, {
                'filter': "highway='primary,secondary,tertiary,motorway_link,trunk_link,primary_link,secondary_link,tertiary_link'",
                'line-width': 6,
                'style': [{
                    'filter': "highway='primary'",
                    'children': [{
                        'line-width': 4,
                        'line-color': '@primary_inner'
                    }]
                }, {
                    'filter': "highway='secondary'",
                    'children': [{
                        'line-width': 4,
                        'line-color': '@secondary_inner'
                    }]
                }, {
                    'filter': "highway='tertiary'",
                    'children': [{
                        'line-width': 4,
                        'line-color': '@tertiary_inner'
                    }]
                }, {
                    'filter': "highway='motorway_link'",
                    'children': [{
                        'line-width': 4,
                        'line-color': '#F7DDB9'
                    }]
                }, {
                    'filter': "highway='trunk_link'",
                    'children': [{
                        'line-width': 4,
                        'line-color': '#FAF2E1'
                    }]
                }, {
                    'filter': "highway='primary_link'",
                    'children': [{
                        'line-width': 4,
                        'line-color': '@secondary_link_inner'
                    }]
                }, {
                    'filter': "highway='tertiary_link'",
                    'children': [{
                        'line-width': 4,
                        'line-color': '@primary_inner'
                    }]
                }, {
                    'filter': "highway='secondary_link'",
                    'children': [{
                        'line-width': 4,
                        'line-color': '#F0EFEE'
                    }]
                }]
            }, {
                'filter': "highway='residential,unclassified,road,living_street'",
                'line-width': 4,
                'style': [{
                    'filter': "highway='residential'",
                    'children': [{
                        'line-width': 2,
                        'line-color': '@residential_inner'
                    }]
                }, {
                    'filter': "highway='unclassified'",
                    'children': [{
                        'line-width': 2,
                        'line-color': '@unclassified_inner'
                    }]
                }, {
                    'filter': "highway='road'",
                    'children': [{
                        'line-width': 2,
                        'line-color': '@road_inner'
                    }]
                }, {
                    'filter': "highway='living_street'",
                    'children': [{
                        'line-width': 2,
                        'line-color': '@living_street_inner'
                    }]
                }]
            }, {
                'filter': "highway='service,pedestrian'",
                'style': [{
                    'children': [{
                        'line-width': 1,
                        'line-color': '#f7f7f7'
                    }]
                }]
            }, {
                'filter': "highway='cycleway,footway,bridleway,path,steps,track'",
                'style': [{
                    'children': [{
                        'line-width': 1,
                        'line-color': '#e7e6e5'
                    }]
                }]
            }]
        }, {
            'filter': 'zoom=16',
            'line-color': '@bridge_outer2',
            'style': [{
                'filter': "highway='motorway,trunk,primary'",
                'line-width': 10,
                'style': [{
                    'filter': "highway='motorway'",
                    'children': [{
                        'line-width': 8,
                        'line-color': '@motorway_inner'
                    }]
                }, {
                    'filter': "highway='trunk'",
                    'children': [{
                        'line-width': 8,
                        'line-color': '@trunk_inner'
                    }]
                }, {
                    'filter': "highway='primary'",
                    'children': [{
                        'line-width': 8,
                        'line-color': '@primary_inner'
                    }]
                }]
            }, {
                'filter': "highway='secondary,tertiary,motorway_link,trunk_link,primary_link,secondary_link,tertiary_link'",
                'line-width': 8,
                'style': [{
                    'filter': "highway='secondary'",
                    'children': [{
                        'line-width': 6,
                        'line-color': '@secondary_inner'
                    }]
                }, {
                    'filter': "highway='tertiary'",
                    'children': [{
                        'line-width': 6,
                        'line-color': '@tertiary_inner'
                    }]
                }, {
                    'filter': "highway='motorway_link'",
                    'children': [{
                        'line-width': 6,
                        'line-color': '#F7DDB9'
                    }]
                }, {
                    'filter': "highway='trunk_link'",
                    'children': [{
                        'line-width': 6,
                        'line-color': '#FAF2E1'
                    }]
                }, {
                    'filter': "highway='primary_link'",
                    'children': [{
                        'line-width': 6,
                        'line-color': '@primary_inner'
                    }]
                }, {
                    'filter': "highway='secondary_link'",
                    'children': [{
                        'line-width': 6,
                        'line-color': '@secondary_link_inner'
                    }]
                }, {
                    'filter': "highway='tertiary_link'",
                    'children': [{
                        'line-width': 6,
                        'line-color': '@tertiary_link_inner'
                    }]
                }]
            }, {
                'filter': "highway='residential,unclassified,road'",
                'line-color': '@bridge_outer2',
                'line-width': 6,
                'style': [{
                    'filter': "highway='residential'",
                    'children': [{
                        'line-width': 4,
                        'line-color': '@residential_inner'
                    }]
                }, {
                    'filter': "highway='unclassified'",
                    'children': [{
                        'line-width': 4,
                        'line-color': '@unclassified_inner'
                    }]
                }, {
                    'filter': "highway='road'",
                    'children': [{
                        'line-width': 4,
                        'line-color': '@road_inner'
                    }]
                }]
            }, {
                'filter': "highway='living_street,service'",
                'style': [{
                    'filter': "highway='living_street'",
                    'children': [{
                        'line-width': 2,
                        'line-color': '@living_street_inner'
                    }]
                }, {
                    'filter': "highway='service'",
                    'children': [{
                        'line-width': 2,
                        'line-color': '@service_inner'
                    }]
                }]
            }, {
                'filter': "highway='pedestrian,cycleway,footway,bridleway,path,steps,track'",
                'style': [{
                    'children': [{
                        'line-width': 2,
                        'line-color': '#F0EFEE'
                    }]
                }]
            }]
        }, {
            'filter': 'zoom=17',
            'line-color': '@bridge_outer2',
            'style': [{
                'filter': "highway='motorway,trunk,primary'",
                'line-width': 12,
                'style': [{
                    'filter': "highway='motorway'",
                    'children': [{
                        'line-width': 10,
                        'line-color': '@motorway_inner'
                    }]
                }, {
                    'filter': "highway='trunk'",
                    'children': [{
                        'line-width': 10,
                        'line-color': '@trunk_inner'
                    }]
                }, {
                    'filter': "highway='primary'",
                    'children': [{
                        'line-width': 10,
                        'line-color': '@primary_inner'
                    }]
                }]
            }, {
                'filter': "highway='secondary,motorway_link,trunk_link,primary_link,secondary_link'",
                'line-width': 10,
                'style': [{
                    'filter': "highway='secondary'",
                    'children': [{
                        'line-width': 8,
                        'line-color': '@secondary_inner'
                    }]
                }, {
                    'filter': "highway='motorway_link'",
                    'children': [{
                        'line-width': 8,
                        'line-color': '#F7DDB9'
                    }]
                }, {
                    'filter': "highway='trunk_link'",
                    'children': [{
                        'line-width': 8,
                        'line-color': '#FAF2E1'
                    }]
                }, {
                    'filter': "highway='primary_link'",
                    'children': [{
                        'line-width': 8,
                        'line-color': '@primary_inner'
                    }]
                }, {
                    'filter': "highway='secondary_link'",
                    'children': [{
                        'line-width': 8,
                        'line-color': '@secondary_link_inner'
                    }]
                }]
            }, {
                'filter': "highway='tertiary,tertiary_link,residential,unclassified,road'",
                'line-width': 8,
                'style': [{
                    'filter': "highway='tertiary'",
                    'children': [{
                        'line-width': 6,
                        'line-color': '@tertiary_inner'
                    }]
                }, {
                    'filter': "highway='tertiary_link'",
                    'children': [{
                        'line-width': 6,
                        'line-color': '@tertiary_link_inner'
                    }]
                }, {
                    'filter': "highway='residential'",
                    'children': [{
                        'line-width': 6,
                        'line-color': '@residential_inner'
                    }]
                }, {
                    'filter': "highway='unclassified'",
                    'children': [{
                        'line-width': 6,
                        'line-color': '@unclassified_inner'
                    }]
                }, {
                    'filter': "highway='road'",
                    'children': [{
                        'line-width': 6,
                        'line-color': '@road_inner'
                    }]
                }]
            }, {
                'filter': "highway='living_street,service'",
                'style': [{
                    'filter': "highway='living_street'",
                    'children': [{
                        'line-width': 4,
                        'line-color': '@living_street_inner'
                    }]
                }, {
                    'filter': "highway='service'",
                    'children': [{
                        'line-width': 4,
                        'line-color': '@service_inner'
                    }]
                }]
            }, {
                'filter': "highway='pedestrian,cycleway,footway,bridleway,path,steps,track'",
                'style': [{
                    'children': [{
                        'line-width': 2,
                        'line-color': '#F0EFEE'
                    }]
                }]
            }]
        }, {
            'filter': 'zoom>=18;zoom<=19',
            'line-color': '@bridge_outer2',
            'style': [{
                'filter': "highway='motorway,trunk,primary'",
                'line-width': 14,
                'style': [{
                    'filter': "highway='motorway'",
                    'children': [{
                        'line-width': 12,
                        'line-color': '@motorway_inner'
                    }]
                }, {
                    'filter': "highway='trunk'",
                    'children': [{
                        'line-width': 12,
                        'line-color': '@trunk_inner'
                    }]
                }, {
                    'filter': "highway='primary'",
                    'children': [{
                        'line-width': 12,
                        'line-color': '@primary_inner'
                    }]
                }]
            }, {
                'filter': "highway='secondary,motorway_link,trunk_link,primary_link,secondary_link'",
                'line-width': 12,
                'style': [{
                    'filter': "highway='secondary'",
                    'children': [{
                        'line-width': 10,
                        'line-color': '@secondary_inner'
                    }]
                }, {
                    'filter': "highway='motorway_link'",
                    'children': [{
                        'line-width': 10,
                        'line-color': '#F7DDB9'
                    }]
                }, {
                    'filter': "highway='trunk_link'",
                    'children': [{
                        'line-width': 10,
                        'line-color': '#FAF2E1'
                    }]
                }, {
                    'filter': "highway='primary_link'",
                    'children': [{
                        'line-width': 10,
                        'line-color': '@primary_inner'
                    }]
                }, {
                    'filter': "highway='secondary_link'",
                    'children': [{
                        'line-width': 10,
                        'line-color': '@secondary_link_inner'
                    }]
                }]
            }, {
                'filter': "highway='tertiary,tertiary_link,residential,unclassified,road'",
                'line-width': 10,
                'style': [{
                    'filter': "highway='tertiary'",
                    'children': [{
                        'line-width': 8,
                        'line-color': '@tertiary_inner'
                    }]
                }, {
                    'filter': "highway='tertiary_link'",
                    'children': [{
                        'line-width': 8,
                        'line-color': '@tertiary_link_inner'
                    }]
                }, {
                    'filter': "highway='residential'",
                    'children': [{
                        'line-width': 8,
                        'line-color': '@residential_inner'
                    }]
                }, {
                    'filter': "highway='unclassified'",
                    'children': [{
                        'line-width': 8,
                        'line-color': '@unclassified_inner'
                    }]
                }, {
                    'filter': "highway='road'",
                    'children': [{
                        'line-width': 8,
                        'line-color': '@road_inner'
                    }]
                }]
            }]
        }]
    }, {
        'id': 'osm_road_linestring_z14-19_oneway_style',
        'filter': "zoom>=16;zoom<=19;oneway='yes';layerName='osm_road_linestring'",
        'style': [{
            'line-oneway': true
        }]
    }, {
        'id': 'osm_road_linestring_z14-19_bridge_oneway_style',
        'filter': "zoom>=16;zoom<=19;oneway='yes';bridge='yes';layer='1,2,3,4,5';layerName='osm_road_linestring'",
        'z-index': 'layer',
        'style': [{
            'line-oneway': true
        }]
    }, {
        'id': 'osm_construct_polygon_label_z14-19_style',
        'filter': "zoom>=17;zoom<=19;layerName='osm_construct_polygon_z14-19'",
        'style': [{
            'text-name': '@text_name',
            'text-fill': '@baseland_text_fill',
            'text-halo-fill': '@baseland_text_halo_fill',
            'text-halo-radius': '@radius',
            'text-font': '14px sans-serif',
            'text-align': '@text_align',
            'text-placements': '',
            'text-wrap-before': false,
            'text-wrap-width': 40
        }]
    }, {
        'id': 'osm_construct_polygon_z14-19_style',
        'style': [{
            'filter': "zoom=16;building!='house'",
            'style': [{
                'polygon-fill': '@building_fill',
                'polygon-outline-color': '@building_border',
                'polygon-outline-width': 1
            }]
        }, {
            'filter': 'zoom>=17;zoom<=19',
            'style': [{
                'polygon-fill': '@building_fill',
                'polygon-outline-color': '@building_border',
                'polygon-outline-width': 1,
                'polygon-shadow-color': '@building_fillborder',
                'polygon-shadow-dx': 2,
                'polygon-shadow-dy': -2
            }]
        }],
        'filter': "layerName='osm_construct_polygon_z14-19'"
    }, {
        'id': 'osm_construct_linestring_z14-19_style',
        'filter': "zoom>=15;zoom<=19;power='line,minor_line';layerName='osm_construct_linestring_z14-19'",
        'style': [{
            'line-color': '#a4a3a1',
            'line-width': 1
        }]
    }, {
        'id': 'osm_construct_point_z14-19_style',
        'filter': "zoom>=15;zoom<=19;power='pole,tower';layerName='osm_construct_point_z14-19'",
        'style': [{
            'point-type': 'symbol',
            'point-symbol-type': 'square',
            'point-fill': '#cccccc',
            'point-outline-color': '#949494',
            'point-size': 4.5
        }]
    }, {
        'id': 'ne_state2m_linestring_style',
        'filter': "zoom>=4;zoom<=6;scalerank<=7;layerName='ne_state2m_linestring'",
        'style': [{
            'line-color': '#dedede',
            'line-width': 1
        }]
    }, {
        'id': 'ne_country10m_linestring_style',
        'style': [{
            'filter': 'zoom>=1;zoom<=3',
            'line-color': '#d9dcdf',
            'line-width': 1
        }, {
            'filter': 'zoom>=4;zoom<=6',
            'line-color': '#aea08a',
            'line-width': 1
        }],
        'filter': "layerName='ne_country10m_linestring'"
    }, {
        'id': 'osm_boundary_linestring_z7-10_style',
        'style': [{
            'filter': 'zoom>=7;zoom<=10',
            'line-color': 'rgb(190,175,190)',
            'line-cap': '@line_cap',
            'style': [{
                'filter': 'zoom>=7;zoom<=10;admin_level=2',
                'line-width': 2
            }, {
                'filter': 'zoom>=7;zoom<=10;admin_level=4',
                'line-width': 1
            }]
        }],
        'filter': "layerName='osm_boundary_linestring_z7-10'"
    }, {
        'id': 'osm_boundary_linestring_z11-12_style',
        'style': [{
            'filter': 'zoom>=11;zoom<=12',
            'line-color': 'rgb(190,175,190)',
            'line-cap': '@line_cap',
            'style': [{
                'filter': 'admin_level=2',
                'line-width': 3
            }, {
                'filter': 'admin_level=4',
                'line-width': 2
            }, {
                'filter': 'admin_level=6',
                'line-width': 1
            }]
        }],
        'filter': "layerName='osm_boundary_linestring_z11-12'"
    }, {
        'id': 'osm_boundary_linestring_z13-19_style',
        'style': [{
            'filter': 'zoom>=13;zoom<=19',
            'line-color': 'rgb(190,175,190)',
            'line-cap': '@line_cap',
            'style': [{
                'filter': 'admin_level=2',
                'line-width': 4
            }, {
                'filter': 'admin_level=4',
                'line-width': 3
            }, {
                'filter': 'admin_level=6',
                'line-width': 2
            }, {
                'filter': 'admin_level=8',
                'line-width': 1
            }]
        }],
        'filter': "layerName='osm_boundary_linestring_z13-19'"
    }, {
        'id': 'osm_poi_point_z14-19_style',
        'filter': "zoom>=18;zoom<=19;layerName='osm_poi_point_z14-19'",
        'style': [{
            'shield-name': '@text_name',
            'shield-fill': '@baseland_text_fill',
            'shield-halo-fill': '@baseland_text_halo_fill',
            'shield-halo-radius': '@radius',
            'shield-font': '10px sans-serif',
            'shield-dy': 10,
            'shield-icon-type': 'image',
            'style': [{
                'filter': "aeroway='terminal'",
                'shield-icon-src': 'Icons\\\\aerowayterminal.16.png'
            }, {
                'filter': "aeroway='helipad'",
                'shield-icon-src': 'Icons\\\\aerowayhelipad.16.png'
            }, {
                'filter': "aeroway='gate'",
                'shield-icon-src': 'Icons\\\\aerowaygate.16.png'
            }, {
                'filter': "aeroway='aerodrome'",
                'shield-icon-src': 'Icons\\\\aerowayaerodrome.16.png'
            }, {
                'filter': "amenity='waste_disposal'",
                'shield-icon-src': 'Icons\\\\amenitywaste_disposal.16.png'
            }, {
                'filter': "amenity='veterinary'",
                'shield-icon-src': 'Icons\\\\amenityveterinary.16.png'
            }, {
                'filter': "amenity='vending_machine'",
                'shield-icon-src': 'Icons\\\\amenityvending_machine.16.png'
            }, {
                'filter': "amenity='university'",
                'shield-icon-src': 'Icons\\\\amenityuniversity.16.png'
            }, {
                'filter': "amenity='townhall'",
                'shield-icon-src': 'Icons\\\\amenitytownhall.16.png'
            }, {
                'filter': "amenity='theatre'",
                'shield-icon-src': 'Icons\\\\amenitytheatre.16.png'
            }, {
                'filter': "amenity='telephone'",
                'shield-icon-src': 'Icons\\\\amenitytelephone.16.png'
            }, {
                'filter': "amenity='taxi'",
                'shield-icon-src': 'Icons\\\\amenitytaxi.16.png'
            }, {
                'filter': "amenity='shelter'",
                'shield-icon-src': 'Icons\\\\amenityshelter.16.png'
            }, {
                'filter': "amenity='school'",
                'shield-icon-src': 'Icons\\\\amenityschool.16.png'
            }, {
                'filter': "amenity='restaurant'",
                'shield-icon-src': 'Icons\\\\amenityrestaurant.16.png'
            }, {
                'filter': "amenity='recycling'",
                'shield-icon-src': 'Icons\\\\amenityrecycling.16.png'
            }, {
                'filter': "amenity='pub'",
                'shield-icon-src': 'Icons\\\\amenitypub.16.png'
            }, {
                'filter': "amenity='prison'",
                'shield-icon-src': 'Icons\\\\amenityprison.16.png'
            }, {
                'filter': "amenity='post_office'",
                'shield-icon-src': 'Icons\\\\amenitypost_office.16.png'
            }, {
                'filter': "amenity='post_box'",
                'shield-icon-src': 'Icons\\\\amenitypost_box.16.png'
            }, {
                'filter': "amenity='police'",
                'shield-icon-src': 'Icons\\\\amenitypolice-2.16.png'
            }, {
                'filter': "amenity='nursing_home'",
                'shield-icon-src': 'Icons\\\\amenitynursing_home.16.png'
            }, {
                'filter': "amenity='library'",
                'shield-icon-src': 'Icons\\\\amenitylibrary-2.16.png'
            }, {
                'filter': "amenity='ice_cream'",
                'shield-icon-src': 'Icons\\\\amenityice_cream.16.png'
            }, {
                'filter': "amenity='fountain'",
                'shield-icon-src': 'Icons\\\\amenityfountain-2.16.png'
            }, {
                'filter': "amenity='fire_station'",
                'shield-icon-src': 'Icons\\\\amenityfire_station-2.16.png'
            }, {
                'filter': "amenity='embassy'",
                'shield-icon-src': 'Icons\\\\amenityembassy.16.png'
            }, {
                'filter': "amenity='drinking_water'",
                'shield-icon-src': 'Icons\\\\amenitydrinking_water.16.png'
            }, {
                'filter': "amenity='doctors'",
                'shield-icon-src': 'Icons\\\\amenitydoctors.16.png'
            }, {
                'filter': "amenity='dentist'",
                'shield-icon-src': 'Icons\\\\amenitydentist.16.png'
            }, {
                'filter': "amenity='court_house'",
                'shield-icon-src': 'Icons\\\\amenitycourthouse.16.png'
            }, {
                'filter': "amenity='college'",
                'shield-icon-src': 'Icons\\\\amenitycollege.16.png'
            }, {
                'filter': "amenity='clock'",
                'shield-icon-src': 'Icons\\\\amenityclock.16.png'
            }, {
                'filter': "amenity='cinema'",
                'shield-icon-src': 'Icons\\\\amenitycinema-2.16.png'
            }, {
                'filter': "amenity='car_rental'",
                'shield-icon-src': 'Icons\\\\amenitycar_rental.16.png'
            }, {
                'filter': "amenity='casino'",
                'shield-icon-src': 'Icons\\\\amenitycasino.16.png'
            }, {
                'filter': "amenity='cafe'",
                'shield-icon-src': 'Icons\\\\amenitycafe.16.png'
            }, {
                'filter': "amenity='bus_station'",
                'shield-icon-src': 'Icons\\\\amenitybus_station.16.png'
            }, {
                'filter': "amenity='biergarten'",
                'shield-icon-src': 'Icons\\\\amenitybiergarten.16.png'
            }, {
                'filter': "amenity='bicycle_rental'",
                'shield-icon-src': 'Icons\\\\amenitybicycle_rental.16.png'
            }, {
                'filter': "amenity='bicycle_parking'",
                'shield-icon-src': 'Icons\\\\amenityparking-bicycle.16.png'
            }, {
                'filter': "amenity='bench'",
                'shield-icon-src': 'Icons\\\\amenitybench.16.png'
            }, {
                'filter': "amenity='bar'",
                'shield-icon-src': 'Icons\\\\amenitybar.16.png'
            }, {
                'filter': "barrier='tollbooth'",
                'shield-icon-src': 'Icons\\\\barriertoll_booth.16.png'
            }, {
                'filter': "barrier='stile'",
                'shield-icon-src': 'Icons\\\\barrierstile.16.png'
            }, {
                'filter': "barrier='lift_gate'",
                'shield-icon-src': 'Icons\\\\barrierlift_gate.16.png'
            }, {
                'filter': "barrier='kissing_gate'",
                'shield-icon-src': 'Icons\\\\barrierkissing_gate.16.png'
            }, {
                'filter': "barrier='gate'",
                'shield-icon-src': 'Icons\\\\barriergate.16.png'
            }, {
                'filter': "barrier='entrance'",
                'shield-icon-src': 'Icons\\\\barrierentrance.16.png'
            }, {
                'filter': "barrier='cycle_barrier'",
                'shield-icon-src': 'Icons\\\\barriercycle_barrier.16.png'
            }, {
                'filter': "barrier='cattle_grid'",
                'shield-icon-src': 'Icons\\\\barriercattle_grid.16.png'
            }, {
                'filter': "barrier='bollard'",
                'shield-icon-src': 'Icons\\\\barrierbollard.16.png'
            }, {
                'filter': "barrier='block'",
                'shield-icon-src': 'Icons\\\\barrierblock.16.png'
            }, {
                'filter': "ford='yes'",
                'shield-icon-src': 'Icons\\\\fordyes.16.png'
            }, {
                'filter': "historic='wreck'",
                'shield-icon-src': 'Icons\\\\historicwreck.16.png'
            }, {
                'filter': "historic='wayside_shrine'",
                'shield-icon-src': 'Icons\\\\historicwayside_shrine.16.png'
            }, {
                'filter': "historic='wayside_cross'",
                'shield-icon-src': 'Icons\\\\historicwayside_cross.16.png'
            }, {
                'filter': "historic='ruins'",
                'shield-icon-src': 'Icons\\\\historicruins.16.png'
            }, {
                'filter': "historic='monument'",
                'shield-icon-src': 'Icons\\\\historicmonument.16.png'
            }, {
                'filter': "historic='memorial'",
                'shield-icon-src': 'Icons\\\\historicmemorial.16.png'
            }, {
                'filter': "historic='castle'",
                'shield-icon-src': 'Icons\\\\historiccastle-2.16.png'
            }, {
                'filter': "historic='battlefield'",
                'shield-icon-src': 'Icons\\\\historicbattlefield.16.png'
            }, {
                'filter': "highway='traffic_signals'",
                'shield-icon-src': 'Icons\\\\highwaytraffic_signals.16.png'
            }, {
                'filter': "highway='bus_stop'",
                'shield-icon-src': 'Icons\\\\highwaybus_stop-2.16.png'
            }, {
                'filter': "leisure='stadium'",
                'shield-icon-src': 'Icons\\\\leisurestadium.16.png'
            }, {
                'filter': "leisure='slipway'",
                'shield-icon-src': 'Icons\\\\leisureslipway.16.png'
            }, {
                'filter': "leisure='marina'",
                'shield-icon-src': 'Icons\\\\leisuremarina.16.png'
            }, {
                'filter': "man_made='windmill'",
                'shield-icon-src': 'Icons\\\\man_madewindmill.16.png'
            }, {
                'filter': "man_made='water_tower'",
                'shield-icon-src': 'Icons\\\\man_madewater_tower.16.png'
            }, {
                'filter': "man_made='lighthouse'",
                'shield-icon-src': 'Icons\\\\man_madelighthouse.16.png'
            }, {
                'filter': "man_made='crane'",
                'shield-icon-src': 'Icons\\\\man_madecrane.16.png'
            }, {
                'filter': "military='bunker'",
                'shield-icon-src': 'Icons\\\\militarybunker.16.png'
            }, {
                'filter': "natural='peak'",
                'shield-icon-src': 'Icons\\\\naturalpeak-2.16.png'
            }, {
                'filter': "natural='cave_entrance'",
                'shield-icon-src': 'Icons\\\\naturalcave.16.png'
            }, {
                'filter': "office='estate_agent'",
                'shield-icon-src': 'Icons\\\\officeestate_agent-2.16.png'
            }, {
                'filter': "power='tower'",
                'shield-icon-src': 'Icons\\\\powertower.16.png'
            }, {
                'filter': "power='sub_station'",
                'shield-icon-src': 'Icons\\\\powersub_station.16.png'
            }, {
                'filter': "railway='tram_stop'",
                'shield-icon-src': 'Icons\\\\railwaytram_stop.16.png'
            }, {
                'filter': "railway='subway'",
                'shield-icon-src': 'Icons\\\\railwaysubway.16.png'
            }, {
                'filter': "shop='video'",
                'shield-icon-src': 'Icons\\\\shopvideo.16.png'
            }, {
                'filter': "shop='toys'",
                'shield-icon-src': 'Icons\\\\shoptoys.16.png'
            }, {
                'filter': "shop='tobacco'",
                'shield-icon-src': 'Icons\\\\shoptobacco.16.png'
            }, {
                'filter': "shop='supermarket'",
                'shield-icon-src': 'Icons\\\\shopsupermarket.16.png'
            }, {
                'filter': "shop='pet'",
                'shield-icon-src': 'Icons\\\\shoppet-2.16.png'
            }, {
                'filter': "shop='optician'",
                'shield-icon-src': 'Icons\\\\shopoptician.16.png'
            }, {
                'filter': "shop='newsagent'",
                'shield-icon-src': 'Icons\\\\shopnewsagent.16.png'
            }, {
                'filter': "shop='musical_instrument'",
                'shield-icon-src': 'Icons\\\\shopmusic.16.png'
            }, {
                'filter': "shop='motorcycle'",
                'shield-icon-src': 'Icons\\\\shopmotorcycle.16.png'
            }, {
                'filter': "shop='mobile_phone'",
                'shield-icon-src': 'Icons\\\\shopmobile_phone.16.png'
            }, {
                'filter': "shop='laundry'",
                'shield-icon-src': 'Icons\\\\shoplaundry.16.png'
            }, {
                'filter': "shop='kiosk'",
                'shield-icon-src': 'Icons\\\\shopkiosk.16.png'
            }, {
                'filter': "shop='jewelry'",
                'shield-icon-src': 'Icons\\\\shopjewelry.16.png'
            }, {
                'filter': "shop='hifi'",
                'shield-icon-src': 'Icons\\\\shophifi.16.png'
            }, {
                'filter': "shop='hearing_aids'",
                'shield-icon-src': 'Icons\\\\shophearing_aids.16.png'
            }, {
                'filter': "shop='hairdresser'",
                'shield-icon-src': 'Icons\\\\shophairdresser.16.png'
            }, {
                'filter': "shop='greengrocer'",
                'shield-icon-src': 'Icons\\\\shopgreengrocer.16.png'
            }, {
                'filter': "shop='gift'",
                'shield-icon-src': 'Icons\\\\shopgift.16.png'
            }, {
                'filter': "shop='garden_centre'",
                'shield-icon-src': 'Icons\\\\shopgarden_centre.16.png'
            }, {
                'filter': "shop='florist'",
                'shield-icon-src': 'Icons\\\\shopflorist.16.png'
            }, {
                'filter': "shop='doityourself'",
                'shield-icon-src': 'Icons\\\\shopdoityourself.16.png'
            }, {
                'filter': "shop='department_store'",
                'shield-icon-src': 'Icons\\\\shopdepartment_store.16.png'
            }, {
                'filter': "shop='copyshop'",
                'shield-icon-src': 'Icons\\\\shopcopyshop.16.png'
            }, {
                'filter': "shop='convenience'",
                'shield-icon-src': 'Icons\\\\shopconvenience.16.png'
            }, {
                'filter': "shop='confectionery'",
                'shield-icon-src': 'Icons\\\\shopconfectionery.16.png'
            }, {
                'filter': "shop='computer'",
                'shield-icon-src': 'Icons\\\\shopcomputer.16.png'
            }, {
                'filter': "shop='clothes'",
                'shield-icon-src': 'Icons\\\\shopclothes.16.png'
            }, {
                'filter': "shop='car_repair'",
                'shield-icon-src': 'Icons\\\\shopcar_repair.16.png'
            }, {
                'filter': "shop='car_parts'",
                'shield-icon-src': 'Icons\\\\shopcar_repair.16.png'
            }, {
                'filter': "shop='car'",
                'shield-icon-src': 'Icons\\\\shopcar.16.png'
            }, {
                'filter': "shop='butcher'",
                'shield-icon-src': 'Icons\\\\shopbutcher.16.png'
            }, {
                'filter': "shop='books'",
                'shield-icon-src': 'Icons\\\\shopbooks.16.png'
            }, {
                'filter': "shop='bicycle'",
                'shield-icon-src': 'Icons\\\\shopbicycle.16.png'
            }, {
                'filter': "shop='bakery'",
                'shield-icon-src': 'Icons\\\\shopbakery.16.png'
            }, {
                'filter': "shop='alcohol'",
                'shield-icon-src': 'Icons\\\\shopalcohol.16.png'
            }, {
                'filter': "sport='tennis'",
                'shield-icon-src': 'Icons\\\\sporttennis.16.png'
            }, {
                'filter': "sport='soccer'",
                'shield-icon-src': 'Icons\\\\sportsoccer.16.png'
            }, {
                'filter': "sport='shooting'",
                'shield-icon-src': 'Icons\\\\sportshooting.16.png'
            }, {
                'filter': "sport='motor'",
                'shield-icon-src': 'Icons\\\\sportmotor.16.png'
            }, {
                'filter': "sport='ice_stock'",
                'shield-icon-src': 'Icons\\\\sportice_stock.16.png'
            }, {
                'filter': "sport='horse_racing'",
                'shield-icon-src': 'Icons\\\\sporthorse_racing.16.png'
            }, {
                'filter': "sport='gymnastics'",
                'shield-icon-src': 'Icons\\\\sportgymnastics-2.16.png'
            }, {
                'filter': "sport='golf'",
                'shield-icon-src': 'Icons\\\\sportgolf.16.png'
            }, {
                'filter': "sport='diving'",
                'shield-icon-src': 'Icons\\\\sportdiving.16.png'
            }, {
                'filter': "sport='cricket'",
                'shield-icon-src': 'Icons\\\\sportcricket.16.png'
            }, {
                'filter': "sport='climbing'",
                'shield-icon-src': 'Icons\\\\sportclimbing.16.png'
            }, {
                'filter': "sport='canoe'",
                'shield-icon-src': 'Icons\\\\sportcanoe.16.png'
            }, {
                'filter': "sport='baseball'",
                'shield-icon-src': 'Icons\\\\sportbaseball.16.png'
            }, {
                'filter': "sport='archery'",
                'shield-icon-src': 'Icons\\\\sportarchery.16.png'
            }, {
                'filter': "sport='skiing'",
                'shield-icon-src': 'Icons\\\\sportskiing-downhill.16.png'
            }, {
                'filter': "tourism='zoo'",
                'shield-icon-src': 'Icons\\\\tourismzoo.16.png'
            }, {
                'filter': "tourism='viewpoint'",
                'shield-icon-src': 'Icons\\\\tourismviewpoint.16.png'
            }, {
                'filter': "tourism='theme_park'",
                'shield-icon-src': 'Icons\\\\tourismtheme_park.16.png'
            }, {
                'filter': "tourism='picnic_site'",
                'shield-icon-src': 'Icons\\\\tourismpicnic_site.16.png'
            }, {
                'filter': "tourism='museum'",
                'shield-icon-src': 'Icons\\\\tourismmuseum.16.png'
            }, {
                'filter': "tourism='motel'",
                'shield-icon-src': 'Icons\\\\tourismmotel.16.png'
            }, {
                'filter': "tourism='hotel'",
                'shield-icon-src': 'Icons\\\\tourismhotel-2.16.png'
            }, {
                'filter': "tourism='hostel'",
                'shield-icon-src': 'Icons\\\\tourismhostel.16.png'
            }, {
                'filter': "tourism='chalet'",
                'shield-icon-src': 'Icons\\\\tourismchalet.16.png'
            }, {
                'filter': "tourism='caravan_site'",
                'shield-icon-src': 'Icons\\\\tourismcaravan_site.16.png'
            }, {
                'filter': "tourism='camp_site'",
                'shield-icon-src': 'Icons\\\\tourismcamp_site.16.png'
            }, {
                'filter': "tourism='attraction'",
                'shield-icon-src': 'Icons\\\\tourismattraction.16.png'
            }, {
                'filter': "tourism='artwork'",
                'shield-icon-src': 'Icons\\\\tourismartwork-2.16.png'
            }, {
                'filter': "tourism='alpine_hut'",
                'shield-icon-src': 'Icons\\\\tourismalpine_hut.16.png'
            }, {
                'filter': "waterway='weir'",
                'shield-icon-src': 'Icons\\\\waterwayweir.16.png'
            }]
        }]
    }, {
        'id': 'osm_poi_point_z14-19_amenity_toilets_style',
        'filter': "zoom>=17;zoom<=19;layerName='osm_poi_point_z14-19'",
        'style': [{
            'shield-name': '@text_name',
            'shield-fill': '@baseland_text_fill',
            'shield-halo-fill': '@baseland_text_halo_fill',
            'shield-halo-radius': '@radius',
            'shield-font': '10px sans-serif',
            'shield-dy': 10,
            'shield-icon-type': 'image',
            'style': [{
                'filter': "amenity='toilets'",
                'shield-icon-src': 'Icons\\\\amenitytoilets.16.png'
            }, {
                'filter': "disability_access='yes'",
                'shield-icon-src': 'Icons\\\\amenitytoilets-disabled.16.png'
            }, {
                'filter': "gender_access='men'",
                'shield-icon-src': 'Icons\\\\amenitytoilets-men.16.png'
            }, {
                'filter': "gender_access='women'",
                'shield-icon-src': 'Icons\\\\amenitytoilets-women.16.png'
            }]
        }]
    }, {
        'id': 'osm_poi_point_z14-19_amenity_worship_style',
        'filter': "zoom>=18;zoom<=19;layerName='osm_poi_point_z14-19'",
        'style': [{
            'shield-name': '@text_name',
            'shield-fill': '@baseland_text_fill',
            'shield-halo-fill': '@baseland_text_halo_fill',
            'shield-halo-radius': '@radius',
            'shield-font': '10px sans-serif',
            'shield-dy': 10,
            'shield-icon-type': 'image',
            'style': [{
                'filter': "religion='sikh'",
                'shield-icon-src': 'Icons\\\\amenityplace_of_worship-sikh-3.16.png'
            }, {
                'filter': "religion='shinto'",
                'shield-icon-src': 'Icons\\\\amenityplace_of_worship-shinto-3.16.png'
            }, {
                'filter': "religion='jain'",
                'shield-icon-src': 'Icons\\\\amenityplace_of_worship-jain-3.16.png'
            }, {
                'filter': "religion='muslim'",
                'shield-icon-src': 'Icons\\\\amenityplace_of_worship-islamic-3.16.png'
            }, {
                'filter': "religion='hindu'",
                'shield-icon-src': 'Icons\\\\amenityplace_of_worship-hindu-3.16.png'
            }, {
                'filter': "religion='christian'",
                'shield-icon-src': 'Icons\\\\amenityplace_of_worship-christian-3.16.png'
            }, {
                'filter': "religion='buddhist'",
                'shield-icon-src': 'Icons\\\\amenityplace_of_worship-buddhist-3.16.png'
            }, {
                'filter': "religion='jewish'",
                'shield-icon-src': 'Icons\\\\amenityplace_of_worship-jewish-3.16.png'
            }]
        }]
    }, {
        'id': 'osm_poi_point_z14-19_amenity_hospital_style',
        'filter': "zoom>=18;zoom<=19;layerName='osm_poi_point_z14-19'",
        'style': [{
            'shield-name': '@text_name',
            'shield-fill': '@baseland_text_fill',
            'shield-halo-fill': '@baseland_text_halo_fill',
            'shield-halo-radius': '@radius',
            'shield-font': '10px sans-serif',
            'shield-dy': 10,
            'shield-icon-type': 'image',
            'style': [{
                'filter': "amenity='hospital'",
                'shield-icon-src': 'Icons\\\\amenityhospital.16.png'
            }, {
                'filter': "emergency='yes'",
                'shield-icon-src': 'Icons\\\\amenityhospital-emergency2.16.png'
            }, {
                'filter': "emergency='no'",
                'shield-icon-src': 'Icons\\\\amenityhospital.16.png'
            }]
        }]
    }, {
        'id': 'osm_poi_point_z14-19_amenity_parking_space_style',
        'filter': "zoom>=17;zoom<=19;layerName='osm_poi_point_z14-19'",
        'style': [{
            'shield-name': '@text_name',
            'shield-fill': '@baseland_text_fill',
            'shield-halo-fill': '@baseland_text_halo_fill',
            'shield-halo-radius': '@radius',
            'shield-font': '10px sans-serif',
            'shield-dy': 10,
            'shield-icon-type': 'image',
            'style': [{
                'filter': "fee='yes'",
                'shield-icon-src': 'Icons\\\\amenityparking-car_paid.16.png'
            }, {
                'filter': "access='private'",
                'shield-icon-src': 'Icons\\\\amenityparking-private.16.png'
            }, {
                'filter': "wheelchair='yes'",
                'shield-icon-src': 'Icons\\\\amenityparking-disabled.16.png'
            }]
        }]
    }, {
        'id': 'osm_poi_point_z14-19_amenity_pharmacy_style',
        'filter': "zoom>=18;zoom<=19;layerName='osm_poi_point_z14-19'",
        'style': [{
            'shield-name': '@text_name',
            'shield-fill': '@baseland_text_fill',
            'shield-halo-fill': '@baseland_text_halo_fill',
            'shield-halo-radius': '@radius',
            'shield-font': '10px sans-serif',
            'shield-dy': 10,
            'shield-icon-type': 'image',
            'style': [{
                'filter': "dispensing='yes'",
                'shield-icon-src': 'Icons\\\\amenitypharmacy-dispencing.16.png'
            }, {
                'filter': "amenity='pharmacy'",
                'shield-icon-src': 'Icons\\\\amenitypharmacy.16.png'
            }, {
                'filter': "access='\"'",
                'shield-icon-src': 'Icons\\\\amenitypharmacy.16.png'
            }]
        }]
    }, {
        'id': 'osm_poi_point_z14-19_amenity_fuel_style',
        'filter': "zoom>=18;zoom<=19;layerName='osm_poi_point_z14-19'",
        'style': [{
            'shield-name': '@text_name',
            'shield-fill': '@baseland_text_fill',
            'shield-halo-fill': '@baseland_text_halo_fill',
            'shield-halo-radius': '@radius',
            'shield-font': '10px sans-serif',
            'shield-dy': 10,
            'shield-icon-type': 'image',
            'style': [{
                'filter': "fuel:lpg='yes'",
                'shield-icon-src': 'Icons\\\\amenityfuel-lpg.16.png'
            }, {
                'filter': "amenity='fuel'",
                'shield-icon-src': 'Icons\\\\amenityfuel.16.png'
            }, {
                'filter': "access='\"'",
                'shield-icon-src': 'Icons\\\\amenityfuel.16.png'
            }]
        }]
    }, {
        'id': 'osm_poi_point_z14-19_amenity_fast_food_style',
        'filter': "zoom>=17;zoom<=19;layerName='osm_poi_point_z14-19'",
        'style': [{
            'shield-name': '@text_name',
            'shield-fill': '@baseland_text_fill',
            'shield-halo-fill': '@baseland_text_halo_fill',
            'shield-halo-radius': '@radius',
            'shield-font': '10px sans-serif',
            'shield-dy': 10,
            'shield-icon-type': 'image',
            'style': [{
                'filter': "amenity='fast_food'",
                'shield-icon-src': 'Icons\\\\amenityfast_food.16.png'
            }, {
                'filter': "cuisine='pizza'",
                'shield-icon-src': 'Icons\\\\amenityfast_food-pizza.16.png'
            }]
        }]
    }, {
        'id': 'osm_poi_point_z14-19_highway_style',
        'filter': "zoom>=18;zoom<=19;layerName='osm_poi_point_z14-19'",
        'style': [{
            'shield-name': '@text_name',
            'shield-fill': '@baseland_text_fill',
            'shield-halo-fill': '@baseland_text_halo_fill',
            'shield-halo-radius': '@radius',
            'shield-font': '10px sans-serif',
            'shield-dy': 10,
            'shield-icon-type': 'image',
            'style': [{
                'filter': "direction='clockwise'",
                'shield-icon-src': 'Icons\\\\highwaymini_roundabout-clockwise.16.png'
            }, {
                'filter': "direction='anticlockwise'",
                'shield-icon-src': 'Icons\\\\highwaymini_roundabout-anticlockwise.16.png'
            }]
        }]
    }, {
        'id': 'osm_poi_point_z14-19_man_made_style',
        'filter': "zoom>=18;zoom<=19;layerName='osm_poi_point_z14-19'",
        'style': [{
            'shield-name': '@text_name',
            'shield-fill': '@baseland_text_fill',
            'shield-halo-fill': '@baseland_text_halo_fill',
            'shield-halo-radius': '@radius',
            'shield-font': '10px sans-serif',
            'shield-dy': 10,
            'shield-icon-type': 'image',
            'style': [{
                'filter': "man_made='mineshaft'",
                'shield-icon-src': 'Icons\\\\man_mademineshaft.16.png'
            }, {
                'filter': "disused='yes'",
                'shield-icon-src': 'Icons\\\\man_mademineshaft-abandoned.16.png'
            }]
        }]
    }, {
        'id': 'osm_poi_point_z14-19_natural_style',
        'filter': "zoom>=18;zoom<=19;layerName='osm_poi_point_z14-19'",
        'style': [{
            'shield-name': '@text_name',
            'shield-fill': '@baseland_text_fill',
            'shield-halo-fill': '@baseland_text_halo_fill',
            'shield-halo-radius': '@radius',
            'shield-font': '10px sans-serif',
            'shield-dy': 10,
            'shield-icon-type': 'image',
            'style': [{
                'filter': "wood='coniferous'",
                'shield-icon-src': 'Icons\\\\naturalwood-coniferous.16.png'
            }, {
                'filter': "wood='deciduous'",
                'shield-icon-src': 'Icons\\\\naturalwood-deciduous.16.png'
            }, {
                'filter': "wood='mixed'",
                'shield-icon-src': 'Icons\\\\naturalwood-mixed.16.png'
            }]
        }]
    }, {
        'id': 'osm_poi_point_z14-19_power_style',
        'filter': "zoom>=18;zoom<=19;layerName='osm_poi_point_z14-19'",
        'style': [{
            'shield-name': '@text_name',
            'shield-fill': '@baseland_text_fill',
            'shield-halo-fill': '@baseland_text_halo_fill',
            'shield-halo-radius': '@radius',
            'shield-font': '10px sans-serif',
            'shield-dy': 10,
            'shield-icon-type': 'image',
            'style': [{
                'filter': "power='plant'",
                'shield-icon-src': 'Icons\\\\powerplant-coal.16.png'
            }, {
                'filter': "plant:source='hydro'",
                'shield-icon-src': 'Icons\\\\powerplant-water.16.png'
            }, {
                'filter': "plant:source='gas'",
                'shield-icon-src': 'Icons\\\\powerplant-gas.16.png'
            }, {
                'filter': "plant:source='solar'",
                'shield-icon-src': 'Icons\\\\powerplant-solar.16.png'
            }, {
                'filter': "plant:source='wind'",
                'shield-icon-src': 'Icons\\\\powerplant-wind.16.png'
            }]
        }]
    }, {
        'id': 'osm_poi_point_z14-19_sport_style',
        'filter': "zoom>=17;zoom<=19;layerName='osm_poi_point_z14-19'",
        'style': [{
            'shield-name': '@text_name',
            'shield-fill': '@baseland_text_fill',
            'shield-halo-fill': '@baseland_text_halo_fill',
            'shield-halo-radius': '@radius',
            'shield-font': '10px sans-serif',
            'shield-dy': 10,
            'shield-icon-type': 'image',
            'style': [{
                'filter': "sport='swimming'",
                'shield-icon-src': 'Icons\\\\sportswimming-indoor.16.png'
            }, {
                'filter': "covered='yes'",
                'shield-icon-src': 'Icons\\\\sporttennis.16.png'
            }]
        }]
    }, {
        'id': 'osm_poi_point_z14-19_tourism_style',
        'filter': "zoom>=18;zoom<=19;layerName='osm_poi_point_z14-19'",
        'style': [{
            'shield-name': '@text_name',
            'shield-fill': '@baseland_text_fill',
            'shield-halo-fill': '@baseland_text_halo_fill',
            'shield-halo-radius': '@radius',
            'shield-font': '10px sans-serif',
            'shield-dy': 10,
            'shield-icon-type': 'image',
            'style': [{
                'filter': "tourism='information'",
                'shield-icon-src': 'Icons\\\\tourisminformation.16.png'
            }, {
                'filter': "information='guidepost'",
                'shield-icon-src': 'Icons\\\\tourisminformation-guidepost.16.png'
            }, {
                'filter': "information='map'",
                'shield-icon-src': 'Icons\\\\tourisminformation-map.16.png'
            }]
        }]
    }, {
        'id': 'osm_poi_point_z14-19_shield_style',
        'filter': "zoom>=18;zoom<=19;layerName='osm_poi_point_z14-19'",
        'style': [{
            'shield-name': '@text_name',
            'shield-fill': '@baseland_text_fill',
            'shield-halo-fill': '@baseland_text_halo_fill',
            'shield-halo-radius': '@radius',
            'shield-font': '10px sans-serif',
            'shield-dy': 12,
            'shield-icon-type': 'symbol',
            'shield-icon-symbol-type': 'circle',
            'shield-icon-size': '6',
            'shield-icon-outline-color': '#666'
        }]
    }],
    'sources': [{
        'id': 'osm_texas_source',
        'url': 'http://13.56.149.214/MapTiles/WorldStreets/{z}/{x}/{y}.mvt',
        'type': 'MVT'
    }],
    'layers': [{
        'id': 'osm_texas_layers',
        'source': 'osm_texas_source',
        'styles': ['ne_baseland30m_polygon_style', 'ne_baseland30m_point_label_style', 'ne_ocean_polygon_style', 'ne_states_provinces10m_point_label_style', 'ne_place2m_point_label_style', 'osm_place_city_point_z7_label_style', 'osm_place_city_town_point_z8-9_label_style', 'osm_place_point_label_z10-19_style', 'osm_baseland1m_polygon_style', 'osm_baseland_polygon_style', 'ne_water10m_polygon_style', 'osm_land_polygon_boundary_z10-11_style', 'osm_land_polygon_landuse_z10-11_style', 'osm_land_polygon_park_z10-11_style', 'osm_land_polygon_natural_z10-11_style', 'osm_land_polygon_leisure_z10-11_style', 'osm_land_polygon_tourism_z10-11_style', 'osm_land_polygon_aeroway_z10-11_style', 'osm_land_polygon_boundary_z12-13_style', 'osm_land_polygon_landuse_z12-13_style', 'osm_land_polygon_park_z12-13_style', 'osm_land_polygon_natural_z12-13_style', 'osm_land_polygon_leisure_z12-13_style', 'osm_land_polygon_tourism_z12-13_style', 'osm_land_polygon_aeroway_z12-13_style', 'osm_land_polygon_boundary_z14-19_style', 'osm_land_polygon_landuse_z14-19_style', 'osm_land_polygon_park_z14-19_style', 'osm_land_polygon_amenity_z14-19_style', 'osm_land_polygon_natural_z14-19_style', 'osm_land_polygon_leisure_z14-19_style', 'osm_land_polygon_tourism_14-19_style', 'osm_land_polygon_aeroway_z14-19_style', 'osm_land_polygon_amenity_z14-19_style', 'osm_land_polygon_z14-19_label_style', 'osm_land_polygon_z14-19_special_style', 'osm_water_polygon_z6-9_style', 'osm_water_polygon_z10-12_style', 'osm_water_polygon_z10-12_label_style', 'osm_water_polygon_z13-19_style', 'osm_water_polygon_z13-19_label_style', 'osm_water_linestring_z11-13_style', 'osm_water_linestring_z14-19_style', 'osm_water_linestring_z14-19_label_style', 'osm_transport_polygon_z12-19_style', 'osm_transport_linestring_z12-19_style', 'osm_transport_linestring_z12-19_aeroway_style', 'ne_road20m_linestring_style', 'ne_road10m_linestring_style', 'osm_road_linestring_z7-8_style', 'osm_road_linestring_z9-11_style', 'osm_road_linestring_label_z9-11_shield_style', 'osm_road_linestring_z12-13_line_style', 'osm_road_linestring_z13_label_style', 'osm_road_linestring_label_z12-13_shield_style', 'osm_road_linestring_z14-19_tunnel_style', 'osm_road_linestring_z14-19_line_style', 'osm_road_linestring_z14-19_oneway_style', 'osm_road_linestring_z14-19_bridge_style', 'osm_road_linestring_z14-19_bridge_oneway_style', 'osm_road_linestring_label_z14-19_shield_style', 'osm_construct_polygon_z14-19_style', 'osm_construct_polygon_label_z14-19_style', 'osm_construct_linestring_z14-19_style', 'osm_construct_point_z14-19_style', 'ne_state2m_linestring_style', 'ne_country10m_linestring_style', 'osm_boundary_linestring_z7-10_style', 'osm_boundary_linestring_z11-12_style', 'osm_boundary_linestring_z13-19_style', 'osm_poi_point_z14-19_style', 'osm_poi_point_z14-19_natural_style', 'osm_poi_point_z14-19_man_made_style', 'osm_poi_point_z14-19_highway_style', 'osm_poi_point_z14-19_amenity_fast_food_style', 'osm_poi_point_z14-19_power_style', 'osm_poi_point_z14-19_tourism_style', 'osm_poi_point_z14-19_sport_style', 'osm_poi_point_z14-19_amenity_toilets_style', 'osm_poi_point_z14-19_amenity_worship_style', 'osm_poi_point_z14-19_amenity_hospital_style', 'osm_poi_point_z14-19_amenity_parking_space_style', 'osm_poi_point_z14-19_amenity_pharmacy_style', 'osm_poi_point_z14-19_amenity_fuel_style', 'osm_poi_point_z14-19_shield_style', 'osm_road_linestring_z14-19_label_style']
    }]
};