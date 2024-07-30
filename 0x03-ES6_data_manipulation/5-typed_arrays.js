/**
 * Creates a buffer array
 * @author <https://github.com/Brianoysters>
 * @returns {DataView}
 */

export default function createInt8TypedArray(length, position, value) {
	if (position >= length) {
		throw new Error('Position outside range');
	}

	const buffer_ = new DataView(new ArrayBuffer(length), 0, length);
	buffer_.setInt8(position, value);
	return buffer_;
}

