/**
 * @flow
 *
 * Created by Tal Kain <tal@kain.net>,
 * and Ricky Reusser <rsreusser@gmail.com>,
 * and Alex Rothberg
 * and Tony Xiao
 * Copyright (c) 2016 Fire Place Inc. All rights reserved.
 */
'use strict'

import {NativeModules} from 'react-native'

const NativeRNSegmentIOAnalytics = NativeModules.RNSegmentIOAnalytics

/**
 * RNSegmentIOAnalytics is a React Native wrapper for the Segment.com Analytics SDK.
 */

export default {
    /*
     * Setting up the Segment IO Analytics service
     *
     * @param configKey https://segment.com/docs/libraries/ios/#configuration or https://segment.com/docs/libraries/android/#customizing-the-client
     * @param flushAt https://segment.com/docs/libraries/ios/#flushing or https://segment.com/docs/libraries/android/#customizing-the-client
     * @param shouldUseLocationServices https://segment.com/docs/libraries/ios/#location-services
     */
    setup: function (configKey: string, flushAt: number = 20, shouldUseLocationServices: bool = false) {
        NativeRNSegmentIOAnalytics.setup(configKey, flushAt, shouldUseLocationServices)
    },

    /*
     * https://segment.com/docs/libraries/ios/#identify
     * https://segment.com/docs/libraries/android/#identify
     */
    identify: function (userId: string, traits: ?Object) {
        NativeRNSegmentIOAnalytics.identify(userId, traits || {})
    },

    /*
     * https://segment.com/docs/libraries/ios/#alias
     * https://segment.com/docs/libraries/android/#alias
     */
    alias: function (userId: string) {
        NativeRNSegmentIOAnalytics.alias(userId)
    },

    /*
     * https://segment.com/docs/libraries/ios/#track
     * https://segment.com/docs/libraries/android/#track
     */
    track: function (event: string, properties: ?Object) {
        NativeRNSegmentIOAnalytics.track(event, properties || {})
    },

    /*
     * https://segment.com/docs/libraries/ios/#screen
     * https://segment.com/docs/libraries/android/#screen
     */
    screen: function (screenName: string, properties: ?Object) {
        NativeRNSegmentIOAnalytics.screen(screenName, properties || {})
    },

    /*
     * https://segment.com/docs/libraries/ios/#reset
     * https://segment.com/docs/libraries/android/#how-do-you-handle-unique-identifiers-
     */
    reset: function () {
        NativeRNSegmentIOAnalytics.reset()
    },

    /*
     * https://segment.com/docs/libraries/ios/#flushing
     * https://segment.com/docs/libraries/android/#how-does-the-library-queue-api-calls-
     */
    flush: function () {
        NativeRNSegmentIOAnalytics.flush()
    },

    /*
     * https://segment.com/docs/libraries/ios/#logging
     * https://segment.com/docs/libraries/android/#debugging
     */
    debug: function (isEnabled: bool) {
        NativeRNSegmentIOAnalytics.debug(isEnabled)
    },

    /*
     * https://segment.com/docs/libraries/ios/#opt-out
     * https://segment.com/docs/libraries/android/#context
     */
    disable: function () {
        NativeRNSegmentIOAnalytics.disable()
    },

    /*
     * https://segment.com/docs/libraries/ios/#opt-out
     * https://segment.com/docs/libraries/android/#context
     */
    enable: function () {
        NativeRNSegmentIOAnalytics.enable()
    },
}
