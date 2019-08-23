// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.


module.exports.liftTypes = function(types) {
    function lift(type) {
        types[type] = types[`sol/${type}.sol:${type}`];
    }

    lift("BConst");
    lift("BError");
    lift("BEvent");
    lift("BFactory");
    lift("BMath");
    lift("BNote");
    lift("BNum");
    lift("BPool");
    lift("BToken");
    lift("TToken");

    module.exports.types = types;
}

module.exports.loadTypes = function(path) {
    let buildout = require(path);
    let types = buildout.contracts;
    module.export.liftTypes(buildout.contracts);
}

let dist = require("../out/combined.json");
module.exports.liftTypes(dist.contracts);
