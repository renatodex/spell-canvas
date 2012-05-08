define([
    'lib/collections/StageHistory',
    'lib/collections/ClickHistory',
    'lib/models/Animation',
    'lib/models/DrawCount',
    'lib/collections/Objects',
    'lib/collections/Contexts',
    'lib/settings'
], function(
    StageHistoryCollection, 
    ClickHistoryCollection, 
    Animation, 
    DrawCount,
    ObjectsCollection,
    ContextsCollection,
    AppSettings
) {
    SpellStorage = {
        StageHistory : new StageHistoryCollection(),
        ClickHistory : new ClickHistoryCollection(),
        Animation : new Animation(),
        DrawCount : new DrawCount(),
        Objects : new ObjectsCollection(),
        Settings : AppSettings,
        Contexts : new ContextsCollection()
    }
    
    return SpellStorage;
});