define([
    'lib/collections/StageHistory',
    'lib/collections/ClickHistory',
    'lib/models/Animation',
    'lib/models/DrawCount',
    'lib/collections/Objects',
    'lib/collections/Contexts',
    'lib/settings',
    'lib/collections/ApplicationStorage'
], function(
    StageHistoryCollection, 
    ClickHistoryCollection, 
    Animation, 
    DrawCount,
    ObjectsCollection,
    ContextsCollection,
    AppSettings,
    ApplicationStorage
) {
    SpellStorage = {
        StageHistory : new StageHistoryCollection(),
        ClickHistory : new ClickHistoryCollection(),
        Animation : new Animation(),
        DrawCount : new DrawCount(),
        Objects : new ObjectsCollection(),
        Settings : AppSettings,
        Contexts : new ContextsCollection(),
        Application : new ApplicationStorage()
    }
    
    return SpellStorage;
});