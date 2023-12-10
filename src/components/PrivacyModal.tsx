import { createSignal } from "solid-js";

function PrivacyPolicy() {
    const [isOpen, setIsOpen] = createSignal<boolean>(false);
    const handleClose = () => setIsOpen(false);
    const handleOpen = () => setIsOpen(true);

    return (
        <div>
            <button onclick={handleOpen} class="text-xs text-zinc-600 underline dark:text-zinc-400">
                Privacy Policy
            </button>
            {isOpen() && <PrivacyModal isOpen={isOpen()} closeModal={handleClose} />}
        </div>
    );
}

interface ModalProps {
    isOpen: boolean;
    closeModal: () => void;
}

function PrivacyModal(props: ModalProps) {
    const { isOpen, closeModal } = props;

    if (!isOpen) return null;

    return (
        <div class="relative z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div class="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 transition-opacity">
                <div class="relative h-1/2 overflow-y-auto rounded-lg bg-neutral-800 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div class="bg-neutral-800 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <button
                            onclick={closeModal}
                            class="absolute right-0 top-0 mr-2 mt-2 rounded-full focus:outline-none"
                        >
                            <svg
                                class="h-6 w-6 fill-zinc-400 hover:fill-zinc-300"
                                viewBox="0 0 20 20"
                            >
                                <path d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
                            </svg>
                        </button>
                        <div class="sm:flex sm:items-start">
                            <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                <div class="mb-4 flex flex-row items-center">
                                    <svg
                                        class="mr-4 h-10 w-10 fill-zinc-400"
                                        stroke-width="1"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M19.432,7.157c-0.312-1.113-1.624-1.858-3.496-2.17c0.279,0.331,0.532,0.685,0.754,1.06c1.043,0.299,1.748,0.764,1.911,1.344c0.095,0.335,0.014,0.729-0.24,1.169c-0.274,0.476-0.768,1.007-1.455,1.542c0-0.034,0.005-0.067,0.005-0.101c0-3.816-3.094-6.91-6.91-6.91c-3.816,0-6.91,3.094-6.91,6.91c0,1.169,0.293,2.268,0.805,3.232c-1.366-0.277-2.303-0.805-2.495-1.487c-0.094-0.336-0.013-0.729,0.241-1.169c0.138-0.239,0.35-0.496,0.595-0.756c0.011-0.449,0.055-0.89,0.138-1.317c-1.398,1.144-2.112,2.386-1.805,3.476c0.338,1.205,1.845,1.98,3.968,2.24C5.8,15.854,7.774,16.91,10,16.91c3.389,0,6.201-2.44,6.791-5.659C18.735,9.951,19.795,8.448,19.432,7.157 M10,16.047c-1.651,0-3.147-0.664-4.238-1.738c0.147,0.005,0.295,0.008,0.447,0.008c1.502,0,3.195-0.212,4.941-0.658c1.734-0.443,3.297-1.064,4.595-1.776C14.952,14.299,12.682,16.047,10,16.047 M15.998,10.733c-1.27,0.797-2.973,1.554-5.062,2.088c-1.616,0.414-3.251,0.632-4.727,0.632c-0.427,0-0.827-0.025-1.213-0.061C4.338,12.425,3.954,11.258,3.954,10c0-3.339,2.707-6.046,6.046-6.046c3.34,0,6.047,2.708,6.047,6.046C16.047,10.249,16.027,10.492,15.998,10.733"></path>
                                    </svg>
                                    <h3
                                        class="text-center text-base font-semibold leading-6 text-zinc-100"
                                        id="modal-title"
                                    >
                                        Privacy Policy
                                    </h3>
                                </div>
                                <p class="mt-2 text-sm text-zinc-400">
                                    Thank you for visiting Alexander Zech's personal website. This
                                    privacy policy outlines how we handle information on this site.
                                </p>
                                <h4 class="mt-4 text-zinc-100">Information Collection and Usage</h4>
                                <p class="mt-2 text-sm text-zinc-400">
                                    We do not collect any personal information from visitors to this
                                    website. We do not use cookies or other tracking mechanisms.
                                    Your visit is purely informational, and no data is gathered or
                                    stored.
                                </p>
                                <h4 class="mt-4 text-zinc-100">Third-party Services</h4>
                                <p class="mt-2 text-sm text-zinc-400">
                                    At present, we do not utilize any third-party services or tools
                                    that collect user data. Any future addition of such services
                                    will be outlined in this privacy policy.
                                </p>
                                <h4 class="mt-4 text-zinc-100">Data Storage and Handling</h4>
                                <p class="mt-2 text-sm text-zinc-400">
                                    As we do not collect any user information, we do not have any
                                    storage or handling procedures for such data.
                                </p>
                                <h4 class="mt-4 text-zinc-100">Contact Form</h4>
                                <p class="mt-2 text-sm text-zinc-400">
                                    There is no contact form or mechanism on this website for users
                                    to submit inquiries or messages. All inquiries should be
                                    addressed to info(at)azech(dot)tech.
                                </p>
                                <h4 class="mt-4 text-zinc-100">Updates to this Privacy Policy</h4>
                                <p class="mt-2 text-sm text-zinc-400">
                                    Any future changes to our privacy policy will be posted on this
                                    page.
                                </p>
                                <h4 class="mt-4 text-zinc-100">Questions</h4>
                                <p class="mt-2 text-sm text-zinc-400">
                                    If you have any questions about this privacy policy, please
                                    contact us at info(at)azech(dot)tech.
                                </p>
                                <p class="mt-4 text-sm text-zinc-400">
                                    This privacy policy is effective as of December 12, 2023.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PrivacyPolicy;
