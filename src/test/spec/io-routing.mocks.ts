﻿/*! Copyright (c) 2018 Siemens AG. Licensed under the MIT License. */

import { take } from "rxjs/operators";

import { Controller, DiscoverEvent, IoActor, IoContext, UpdateEvent } from "../..";
import { IoActorController } from "../../io-routing";

export class IoActorLogger {
    values: any[];
    associations: boolean[];

    constructor() {
        this.reset();
    }

    reset() {
        this.values = [];
        this.associations = [];
    }
}

export class MockIoActorController extends IoActorController {

    logActor(actor: IoActor, logger: IoActorLogger) {
        this.observeAssociation(actor)
            .subscribe(hasAssociation => {
                logger.associations.push(hasAssociation);
            });

        // Note: does not log the latest submitted value on reassociation or
        // undefined on initialization.
        this.communicationManager.observeIoValue(actor)
            .subscribe(value => {
                logger.values.push(value);
            });
    }

}

export class MockIoContextController extends Controller {

    private _ioContext: IoContext;

    discoverIoContext(objectType: string) {
        this.communicationManager.publishDiscover(DiscoverEvent.withObjectTypes([objectType]))
            .subscribe(resolve => {
                this._ioContext = resolve.data.object as IoContext;
            });
    }

    changeIoContext(operatingState: string) {
        this._ioContext["operatingState"] = operatingState;
        return this.communicationManager
            .publishUpdate(UpdateEvent.withObject(this._ioContext))
            .pipe(take(1))
            .toPromise()
            .then(complete => {
                this._ioContext = complete.data.object as IoContext;
            });
    }

}
